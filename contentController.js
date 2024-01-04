```javascript
// Importing required modules
const express = require('express');
const Content = require('./contentModel');

// Creating an instance of express router
const router = express.Router();

// Route to get all content
router.get('/', async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to get content by id
router.get('/:id', getContent, (req, res) => {
    res.json(res.content);
});

// Route to create new content
router.post('/', async (req, res) => {
    const content = new Content({
        title: req.body.title,
        type: req.body.type,
        topic: req.body.topic,
        link: req.body.link,
        description: req.body.description
    });

    try {
        const newContent = await content.save();
        res.status(201).json(newContent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Middleware function to get content by id
async function getContent(req, res, next) {
    let content;
    try {
        content = await Content.findById(req.params.id);
        if (content == null) {
            return res.status(404).json({ message: 'Cannot find content' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.content = content;
    next();
}

module.exports = router;
```

