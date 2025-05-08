import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.slice(1));
    res.writeHead(200, {'Content-Type': 'text/html; charset: utf-8'});

    if (urlPath === 'user') {
        res.write(`<h1>Hello ${urlPath}!</h1>`);
    } else {
        res.write(`<h1>Hello ${urlPath}!</h1>`);
    }
    res.end();
})

server.listen(port, (err) => {
    console.log(`Server started on port ${port}.Press Ctrl-C to finish`);
})