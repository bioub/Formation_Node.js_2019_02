const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');

class Jeu {
  constructor(options = {}) {
    //      {min: 50,      max: 90}
    //const {min: min = 0, max: max = 100} = options;
    const {min = 0, max = 100} = options;
    // const min = options.min || 0;
    // const max = options.max !== undefined ? options.max : 100;

    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  jouer() {
    if (this.essais.length) {
      console.log(chalk.blue(`Vous avez déjà joué : ${this.essais.join(' - ')}...`));
    }

    this._rl.question(chalk.magenta('Quel est le nombre entier ? '), (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this.entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }

      console.log(chalk.green('Gagné'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
