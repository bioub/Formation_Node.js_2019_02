const fs = require('fs');
const path = require('path');

const logFilePath = path.resolve(__dirname, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  fs.appendFileSync(filePath, msg);
}

try {
  log(logFilePath, 'Ligne 1');
  log(logFilePath, 'Ligne 2');
  log(logFilePath, 'Ligne 3');
  log(logFilePath, 'Ligne 4');
}
catch (err) {
  console.log('Erreur pendant le log');
}
