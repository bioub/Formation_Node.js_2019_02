// Exerice 1
// Avec CommonJS, faire les imports exports
// pour que le code en 3 fichiers fonctionne

// Exercice 2
// Dans jeu.js ajouter un peu de couleur avec chalk
const Jeu = require('./jeu');

const game = new Jeu();
game.jouer();
