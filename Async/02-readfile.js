const fs = require('fs-extra');
const path = require('path');

const gitIgnorePath = path.resolve(__dirname, '.gitignore');

// Version synchrone
try {
  const buffer = fs.readFileSync(gitIgnorePath);
  console.log(buffer.toString());
}
catch (err) {
  console.log('Erreur : ' + err.message);
}

// pile d'appels
// ^
// |
// |
// |readFileSync                          toString
// +-------------------------------------------------------> temps
//

// Version asynchrone with callback Node.js
fs.readFile(gitIgnorePath, (err, buffer) => {
  if (err) {
    return console.log('Erreur : ' + err.message);
  }
  console.log(buffer.toString());
});

// pile d'appels
// ^
// |
// |                                      toString
// |readFile ...                          =>
// +-------------------------------------------------------> temps
//

// Version asynchrone with Promise
fs.readFile(gitIgnorePath)
  .then((buffer) => console.log(buffer.toString()))
  .catch((err) => console.log('Erreur : ' + err.message));



// Version asynchrone with async/await
(async () => {
  try {
    const buffer = await fs.readFile(gitIgnorePath);
    console.log(buffer.toString());
  }
  catch (err) {
    console.log('Erreur : ' + err.message);
  }
})();
