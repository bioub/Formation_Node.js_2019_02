const express = require('express');
const http = require('http');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
// Middleware log (utiliser plutot morgan)
// app.use((req, res, next) => {
//   const debut = Date.now();
//   res.on('finish', () => {
//     const fin = Date.now();
//     console.log(`${req.method} ${req.url} - ${res.statusCode} ${fin - debut}ms`);
//   });
//   next();
// });

const contacts = [{
  prenom: 'Romain',
  id: 123,
}, {
  prenom: 'Jean',
  id: 54,
}, {
  prenom: 'Paul',
  id: 312,
}];

// Implémenter 5 routes (association entre une req et un callback)
// Chaque route répond du JSON

// GET /api/contacts
// -> en JSON le tableau complet

// GET /api/contacts/:contactId
// -> en JSON le contact dont l'id est en param ou une erreur 404

// POST /api/contacts
// stocke req.body dans le tableau et génère un id (aléatoire ou max + 1)
// -> en JSON le contact créé, id compris et status 201

// PUT /api/contacts/:contactId
// -> remplace l'ancien contact par le nouveau (s'il existe, 404 sinon)
// -> en JSON l'ancien contact

// DELETE /api/contacts/:contactId
// -> supprime l'ancien contact (s'il existe, 404 sinon)
// -> en JSON le contact supprimé

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/api/contacts/:contactId', (req, res) => {
  res.json({id: req.params.contactId, prenom: 'Romain'});
});

app.post('/inscription', express.json(), (req, res) => {
  res.json({status: 'OK', ...req.body});
});

const server = http.createServer(app);
server.on('error', (err) => {
  console.log(err.message);
});
server.listen(8080, () => {
  console.log('Server started http://localhost:8080/');
});
