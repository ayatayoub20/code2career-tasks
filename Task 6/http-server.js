import { createServer } from 'http';

const server = createServer((req, res) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET') {
    if (url === '/') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "Welcome to the server" }));
    } else if (url === '/about') {
      res.statusCode = 200;
      res.end(JSON.stringify({ message: "This is the about route" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Route not found" }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "Method not allowed" }));
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
