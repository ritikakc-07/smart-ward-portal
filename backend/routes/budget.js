const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM budget', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

router.post('/', (req, res) => {
    const { category, amount } = req.body;
    db.query('INSERT INTO budget (category, amount) VALUES (?, ?)', [category, amount], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Budget entry added', id: results.insertId });
    });
});

module.exports = router;
