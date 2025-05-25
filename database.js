// database.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to the SQLite database file
const dbPath = path.resolve(__dirname, '../database.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Failed to connect to database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create the items table if it doesn't exist
// This table stores item details with an optional image

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT
    )
`;

db.serialize(() => {
    db.run(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
        } else {
            console.log('Table "items" is ready.');
        }
    });
});

// Export the database instance
module.exports = db;