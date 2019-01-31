const fs = require('fs');
const path = require('path');

const dirTestPath = path.resolve(__dirname, 'test');


fs.readdirSync(dirTestPath)
  .filter((filename) => filename.endsWith('.test.js'))
  .forEach((filename) => require(path.resolve(dirTestPath, filename)));
