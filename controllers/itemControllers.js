const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to SQLite database
const db = new sqlite3.Database(path.join(__dirname, '../database.db'), (err) => {
    if (err) return console.error('Failed to connect to DB:', err.message);
    console.log('Connected to the SQLite database.');
});

// Create table if not exists
db.run(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL
    )
`, (err) => {
    if (err) console.error('Error creating table:', err.message);
});

// Get all items
const getAllItems = (callback) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        callback(err, rows);
    });
};

// Get one item
const getItemById = (id, callback) => {
    db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
        callback(err, row);
    });
};

// Add new item
const addItem = (name, description, callback) => {
    db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], function (err) {
        callback(err, this.lastID);
    });
};

// Update item
const updateItem = (id, name, description, callback) => {
    db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], function (err) {
        callback(err);
    });
};

// Delete item
const deleteItem = (id, callback) => {
    db.run('DELETE FROM items WHERE id = ?', [id], function (err) {
        callback(err);
    });
};

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};