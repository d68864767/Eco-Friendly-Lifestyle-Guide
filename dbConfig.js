```javascript
// Importing required modules
const mongoose = require('mongoose');
require('dotenv').config();

// Database Configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

// Connecting to the database
mongoose.connect(`mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to the database');
})
.catch(error => {
    console.log('Could not connect to the database. Exiting now...', error);
    process.exit();
});

module.exports = mongoose;
```
