```javascript
// Import the OpenAI library
const OpenAI = require('openai-api');

// Load environment variables
require('dotenv').config();

// Set up OpenAI with your API key
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Check if the API key is provided
if (!OPENAI_API_KEY) {
    console.error('Please define the OpenAI API key in the .env file');
    process.exit(1);
}

// Initialize the OpenAI API
const openai = new OpenAI(OPENAI_API_KEY);

module.exports = openai;
```

