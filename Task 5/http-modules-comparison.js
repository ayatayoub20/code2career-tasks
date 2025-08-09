
// Comparing Node.js Core Modules: `http`, `http2`, and `https`

//1. http Module

//  Purpose
// - Core module for creating servers and clients using the HTTP/1.1 protocol.
// - Handles plain text requests and responses between client and server.
// - No built-in encryption — data is sent as plaintext.

//Example

import http from 'http';

const httpServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from HTTP server!');
});

httpServer.listen(3000, () => {
  console.log('HTTP server running at http://localhost:3000');
});



//2. http2 Module
// Purpose

// Implements the HTTP/2 protocol, offering better performance and efficiency.
// Features:

//   Multiplexing: Multiple requests over one connection without blocking.
//   Header Compression: Smaller data size with HPACK compression.
//   Server Push: Server can send files before the client requests them.
//   Requires HTTPS for most browsers to accept it.

//Example

import http2 from 'http2';
import fs from 'fs';

const http2Server = http2.createSecureServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
});

http2Server.on('stream', (stream, headers) => {
  stream.respond({ 'content-type': 'text/html', ':status': 200 });
  stream.end('<h1>Hello from HTTP/2 server!</h1>');
});

http2Server.listen(3001, () => {
  console.log('HTTP/2 server running at https://localhost:3001');
});


//3. httpsModule

//Purpose

// - Works like http but uses TLS/SSL for encrypted communication.
// - Ensures data confidentiality, integrity, and authenticity.
// - Essential for handling sensitive data like passwords and payment info.

// Example

import https from 'https';
//import fs from 'fs';

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from HTTPS server!');
});

server.listen(3002, () => {
  console.log('HTTPS server running at https://localhost:3002');
});

