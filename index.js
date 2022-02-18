const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // set the head of the response
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello! Sir Isaac Newton is your friend!');
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
}); // 127.0.0.1 => localhost
