// (function (exports, require, module, __filename, __dirname) {

// inclus le fichier
// - l'extension est optionnelle (si .js ou .json)
// - si le fichier est local au projet, il faut obligatoirement
// commencer par ./ ou ../

// const { sum } = require('../src/maths');
// console.log(sum(1, 2)); // 3

const assert = require('assert'); // dans le binaire de node.js
const chalk = require('chalk');
const maths = require('../src/maths'); // dans le projet

try {
  assert.strictEqual(maths.sum(1, 2), 4, 'sum(1, 2) !== 4');
  console.log(chalk.green('Tous les tests de maths.test sont OK'));
}
catch (err) {
  console.log(chalk.red('Au moins un test de maths.test FAIL'));
  console.log(chalk.white.bgRed('Message associé : ' + err.message));
  process.exit(1);
}

// });
