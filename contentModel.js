```javascript
// Importing required modules
const mongoose = require('./dbConfig');

// Defining the Content schema
const ContentSchema = mongoose.Schema({
    title: String,
    type: String, // e.g., 'article', 'video', 'podcast'
    topic: String, // e.g., 'recycling', 'sustainable living', 'carbon footprint'
    link: String, // URL to the content
    description: String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

// Creating the Content model
const Content = mongoose.model('Content', ContentSchema);

module.exports = Content;
```
