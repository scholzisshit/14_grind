const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1><p>I am an AI/ML student at Shoolini.</p>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact</h1><p>Find me on youtube @unpaid0intern</p>');
});

app.get('/this_random_ahh_page', (req, res) => {
    res.send('<h1>Why are you here?</h1><p>This page is certified brainrot.</p>');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000... listnin');
});
