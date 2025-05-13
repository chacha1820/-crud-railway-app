const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Could not connect to the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT)');

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

app.post('/add', (req, res) => {
    const { name, description } = req.body;
    db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding item');
        } else {
            res.redirect('/');
        }
    });
});

app.post('/update/:id', (req, res) => {
    const { name, description } = req.body;
    const { id } = req.params;
    db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating item');
        } else {
            res.redirect('/');
        }
    });
});

app.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM items WHERE id = ?', [id], function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting item');
        } else {
            res.redirect('/');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});