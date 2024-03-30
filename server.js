const express = require(‘express’);
const bodyParser = require(‘body-parser’);
const querystring = require(‘querystring’);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());

app.post(‘/github-api’, (req, res) => {
    try {
        const inputCode = decodeURIComponent(req.body);
        // Your code transformation logic here
        const transformedCode = transformCode(inputCode);
        res.send(transformedCode);
    } catch (error) {
        console.error(‘Error:’, error);
        res.status(500).send(‘Error processing request.’);
    }
});

// Function to transform code (example)
function transformCode(inputCode) {
    // Your code transformation logic here
    return inputCode.toUpperCase(); // Example transformation
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});