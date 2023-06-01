const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

const getPage = ((res, page) => {
        fs.readFile(path.join(__dirname, 'public', page), (err, content) => {
            if(err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        })
});

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        getPage(res, 'index.html')
    }
    else if(req.url === '/about') {
        getPage(res, 'about.html')
    }
    else if(req.url === '/contact-me') {
        getPage(res, 'contact-me.html')
    }
    else {
        getPage(res, '404.html')
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});