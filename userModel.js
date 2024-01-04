```javascript
// Importing required modules
const mongoose = require('./dbConfig');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    ecoActivities: [{
        type: Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    progress: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// User Model
const User = mongoose.model('User', UserSchema);

module.exports = User;
```

