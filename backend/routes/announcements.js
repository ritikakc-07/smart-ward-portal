const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Safe path to the JSON file
const filePath = path.join(__dirname, '../data/announcements.json');

// GET all announcements
router.get('/', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    res.json(JSON.parse(data));
});

// POST new announcement (admin demo)
router.post('/', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const announcements = JSON.parse(data);

    const newAnnouncement = {
        id: announcements.length + 1,   // automatically assign ID
        ...req.body
    };

    announcements.push(newAnnouncement);
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));

    res.json({ message: 'Announcement added', newAnnouncement });
});

module.exports = router;
