const fs = require('fs-extra');
const path = require('path');

const logFilePath = path.resolve(__dirname, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  return fs.appendFile(filePath, msg);
}

log(logFilePath, 'Ligne 1')
  .then(() => log(logFilePath, 'Ligne 2'))
  .then(() => log(logFilePath, 'Ligne 3'))
  .then(() => log(logFilePath, 'Ligne 4'))
  .catch((err) => console.log('Erreur pendant le log'));
