const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = './public/index.html';
  if (req.url === '/dosen') {
    filePath = './public/dosen.html';
  } else if (req.url === '/mahasiswa') {
    filePath = './public/mahasiswa.html';
  } else if (req.url === '/style.css') {
    filePath = './public/style.css';
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';

  if (extname === '.css') contentType = 'text/css';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end('404 - File Not Found');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
