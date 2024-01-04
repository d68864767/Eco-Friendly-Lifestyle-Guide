```javascript
// Import required libraries
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Import controllers
const userController = require('./userController');
const contentController = require('./contentController');

// Load environment variables
require('dotenv').config();

// Database Configuration
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Server Configuration
const PORT = process.env.PORT || 5000;

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', userController);
app.use('/api/content', contentController);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
```
