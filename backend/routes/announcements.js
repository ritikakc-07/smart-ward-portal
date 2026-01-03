const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../announcements.json');

router.get('/', (req, res) => {
    const data = fs.readFileSync(filePath, 'utf8');
    res.json(JSON.parse(data));
});

router.post('/', (req, res) => {
    const newAnnouncement = req.body;
    const data = fs.readFileSync(filePath, 'utf8');
    const announcements = JSON.parse(data);
    announcements.push(newAnnouncement);
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));
    res.json({ message: 'Announcement added' });
});

module.exports = router;
