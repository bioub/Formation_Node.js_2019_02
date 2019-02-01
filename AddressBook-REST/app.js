const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const userRoutes = require('./routes/user');

const app = express();

// Log Middleware
app.use(morgan('dev'));

// CORS Middleware (cross-domain requests)
app.use(cors());

// Routes
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

app.use('/api', (req, res) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
});

app.use('/api', (err, req, res) => {
  res.statusCode = 500;
  res.json({
    msg: err.message,
  });
});

module.exports = app;

// Exercices :
// 1 - Créer un Model pour Societe {nom: String, adresse: String}
// 2 - 5 même URL que /api/contacts
// (créer les routes dans /routes/societe et les controleurs dans /controllers/societes)
// et penser à enregistrer le préfixe /api/societes dans app.js
// 3 - Regarder le chapitre populate dans la doc de Mongoose
// et faire un lien entre les 2 modèles
// contact.societe par exemple
// appeler .populate dans GET /api/contacts/:contactId

// 4 - Reprendre la gestion des Users, mais via MongoDB
