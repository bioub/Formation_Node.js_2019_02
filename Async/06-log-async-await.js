const fs = require('fs-extra');
const path = require('path');

const logFilePath = path.resolve(__dirname, 'app.log');

function log(filePath, msg) {
  msg = `${(new Date()).toISOString()} - ${msg}\n`
  return fs.appendFile(filePath, msg);
}

(async () => {

  try {
    await log(logFilePath, 'Ligne 1');
    await log(logFilePath, 'Ligne 2');
    await log(logFilePath, 'Ligne 3');
    await log(logFilePath, 'Ligne 4');
  }
  catch (err) {
    console.log('Erreur pendant le log');
  }

})();
