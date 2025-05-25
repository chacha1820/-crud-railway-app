const multer = require('multer');
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + ext;
    cb(null, uniqueName);
  }
});

// File filter to accept PNG, JPEG, BMP only
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/bmp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only PNG, JPEG, BMP files are allowed'), false);
  }
};

// Multer upload with file size limit 2MB
const upload = multer({ 
  storage: storage, 
  fileFilter: fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 } // 2 MB max
});

// SQLite DB setup
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Could not connect to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT
)`);

// Routes

// List all items
app.get('/', (req, res) => {
  db.all('SELECT * FROM items', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving data');
    } else {
      res.render('index', { items: rows });
    }
  });
});

// Add item
app.post('/add', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  let image = null;
  if (req.file) {
    image = req.file.filename;
  }

  db.run(
    'INSERT INTO items (name, description, image) VALUES (?, ?, ?)',
    [name, description, image],
    function (err) {
      if (err) {
        console.error('Error inserting into DB:', err.message);
        return res.status(500).send('Error adding item');
      }
      res.redirect('/');
    }
  );
});

// Show edit form
app.get('/edit/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving item');
    } else if (row) {
      res.render('edit', { item: row });
    } else {
      res.status(404).send('Item not found');
    }
  });
});

// Update item with optional image upload
app.post('/update/:id', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  const { id } = req.params;

  if (!name || !description) {
    return res.status(400).send('Name and description are required.');
  }

  if (req.file) {
    const image = req.file.filename;
    db.run(
      'UPDATE items SET name = ?, description = ?, image = ? WHERE id = ?',
      [name, description, image, id],
      function (err) {
        if (err) {
          console.error('Error updating item with image:', err.message);
          return res.status(500).send('Error updating item');
        }
        res.redirect('/');
      }
    );
  } else {
    db.run(
      'UPDATE items SET name = ?, description = ? WHERE id = ?',
      [name, description, id],
      function (err) {
        if (err) {
          console.error('Error updating item:', err.message);
          return res.status(500).send('Error updating item');
        }
        res.redirect('/');
      }
    );
  }
});

// Delete item
app.post('/delete/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM items WHERE id = ?', [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error deleting item');
    } else {
      res.redirect('/');
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
