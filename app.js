const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
res.end('Hello from Node.js on Ubuntu 22.04!');
});

server.listen(port, () => {
console.log(Server listening on port ${port});
});

