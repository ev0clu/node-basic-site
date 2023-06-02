const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const getPage = ((res, page, statusCode) => {
        fs.readFile(path.join(__dirname, 'public', page), (err, content) => {
            if(err) throw err;
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(content);
        })
});

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        getPage(res, 'index.html', 200)
    }
    else if(req.url === '/about') {
        getPage(res, 'about.html', 200)
    }
    else if(req.url === '/contact-me') {
        getPage(res, 'contact-me.html', 200)
    }
    else {
        getPage(res, '404.html', 404)
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});