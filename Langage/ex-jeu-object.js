// function getRandom() {
//   return Math.random();
// }

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min +1)) + min;
// }

const random = {
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
};

const readline = require('readline');

function Jeu(options) {
  options = options || {};

  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this.entierAlea = random.getIntInclusive(min, max);
  this.essais = [];
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }

  this._rl.question('Quel est le nombre entier ? ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné');
    this._rl.close();
  });
};

const game = new Jeu();
game.jouer();

// pile d'appels
// ^
// |               question       question
// |question       jouer          jouer
// |jouer    ..... =>       ..... =>       .....
// +---------------ENTREE---------ENTREE-------------------------------> temps
//
//
