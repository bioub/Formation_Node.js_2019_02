const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('Hello');
      res.end(); // OBLIGATOIRE
      break;
    case '/api/contact/12':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify({id: 12, prenom: 'Romain'}));
      res.end(); // OBLIGATOIRE
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.write('<h2>Not found</h2>');
      res.end(); // OBLIGATOIRE
  }
});

// server.on('request', (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('Hello');
//   res.end(); // OBLIGATOIRE
// });

// server.on('connection', (socket) => {
//   socket.pipe(process.stdout); // voir la requete du client

//   socket.write('HTTP/1.1 200 OK\r\n');
//   socket.write('Content-Type: text/plain\r\n');
//   socket.write('\r\n');
//   socket.write('Hello\r\n');
//   socket.end(); // OBLIGATOIRE
// });

server.on('error', (err) => {
  console.log(err.message);
});

// server.once('listening', () => {
//   console.log('Server started : http://localhost:8080/');
// });

server.listen(8080, () => {
  console.log('Server started : http://localhost:8080/');
});
