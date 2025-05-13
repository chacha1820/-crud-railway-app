const path = require('path');
const db = require('../database/database');

const getAllItems = (callback) => {
    db.all('SELECT * FROM items', [], callback);
};

const getItemById = (id, callback) => {
    db.get('SELECT * FROM items WHERE id = ?', [id], callback);
};

const addItem = (name, description, callback) => {
    db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], callback);
};

const updateItem = (id, name, description, callback) => {
    db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], callback);
};

const deleteItem = (id, callback) => {
    db.run('DELETE FROM items WHERE id = ?', [id], callback);
};

module.exports = {
    getAllItems,
    getItemById,
    addItem,
    updateItem,
    deleteItem
};