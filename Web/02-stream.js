const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const readline = require('readline');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');

const readStream = fs.createReadStream(editorConfigPath);
readStream
  .pipe(zlib.createGzip())
  .pipe(process.stdout);

// cat .editorconfig | gzip | echo



const rl = readline.createInterface({
  input: readStream,
})

let nb = 0;
rl.on('line', (line) => {
  console.log(++nb, line);
});
