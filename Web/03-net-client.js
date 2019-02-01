const net = require('net');

const socket = net.createConnection(8080, 'localhost');

socket.pipe(process.stdout); // voir la réponse du serveur

socket.once('connect', () => {
  socket.write('POST /inscription HTTP/1.1\r\n');
  socket.write('Host: localhost\r\n');
  socket.write('Content-type: application/json\r\n');
  socket.write('\r\n');
  socket.write('{"prenom": "Romain"}\r\n');
  socket.end(); // OBLIGATOIRE
});
