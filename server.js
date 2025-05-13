app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    db.get('SELECT * FROM items WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving item');
        } else if (row) {
            res.render('edit', { item: row }); 
        } else {
            res.status(404).send('Item not found');
        }
    });
});