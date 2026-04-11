const http = require('http');

const server = http.createServer((req, res) => {
    // We have to manually set the header (status code and content type)
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // We use a switch or if/else to handle routing manually
    const url = req.url;

    if (url === '/') {
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (url === '/about') {
        res.end('<h1>About Me</h1><p>I am an AI/ML student at Shoolini.</p>');
    } else if (url === '/contact') {
        res.end('<h1>Contact</h1><p>Find me on youtube @unpaid0intern</p>');
    } else if (url === '/this_random_ahh_page') {
        res.end('<h1>Why are you here?</h1><p>This page is certified brainrot.</p>');
    } else {
        // We even have to handle the 404 manually!
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(5000, () => {
    console.log('Pure Node server listnin on 5000');
});
