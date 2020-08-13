const express = require('express');
const path = require('path');

const port = process.env.PORT || 3001;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

// Test Route
app.get('/ping', function (req, res) {
    return res.send('pong');
});

// Main Route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


app.listen(port);