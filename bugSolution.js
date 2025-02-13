```javascript
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

let isClosing = false; // Flag to prevent multiple close calls

const gracefulShutdown = () => {
  if (isClosing) return;
  isClosing = true;
  console.log('Server is shutting down...');
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0);
  });
};

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', gracefulShutdown);
// Handle SIGTERM (kill command)
process.on('SIGTERM', gracefulShutdown);

server.listen(8080, () => {
  console.log('Server is running at http://localhost:8080');
});
```