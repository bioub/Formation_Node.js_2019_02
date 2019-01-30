// On a des objets prédéfinis par le langage
console.log(typeof Math);

// On a des objets prédéfinis par Node.js
console.log(typeof process);

// On a des objets prédéfinis par le navigateur
console.log(typeof document);

// On a des objets prédéfinis par le MongoShell
console.log(typeof db);

// On a des objets prédéfinis par le navigateur et Node
console.log(typeof console);

// Un objet JS est un dictionnaire (système clé/valeur dynamique)
// Alors qu'en Java, l'objet est un système statique
// équivalent PHP : tableau associatif
// Java : Map
// C : struct
// Python: dictionnary

// on peut créer un objet avec
// object literal
const coords = {
  x: 10,
  y: 20,
};

// cet objet est extensible (on peut ajouter des clés valeurs)
coords.z = 30;

// la clé z est modifiable (writable)
coords.z = 40;

// la clé z est supprimable (configurable)
delete coords.z;

// Pour accéder aux valeurs depuis les clés on utilise le .
console.log(coords.x);

// une variante est d'utiliser les []
const logMethod = 'log';
const key = 'x';
console[logMethod](coords[key]);

// on peut boucler sur les clés d'un objet
for (const key in coords) {
  console.log(key); // x y
  console.log(coords[key]); // 10 20
}

// On peut convertir object -> array
const keys = Object.keys(coords); // ES5
const values = Object.values(coords); // ES8

// pour convertir dans l'autre sens (voir la lib lodash)

// On peut convertir object (en mémoire) <-> string (qu'on peut écrire dans un fichier)
const json = JSON.stringify(coords); // ES5

// ..... réseau .....

const coordsFromJSON = JSON.parse(json); // ES5

// une autre façon de créer un objet :
// constructor function
function Contact(prenom) {
  this._prenom = prenom;
  // MAUVAISE PRATIQUE de mettre des fonctions ici, elles sont dupliquées
  // this.hello = function() {
  //   return 'Bonjour je m\'appelle ' + this._prenom;
  // };
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
const autreMoyenDaccederARomain = romain;
console.log(typeof Contact); // function
console.log(typeof romain); // object
console.log(romain.hello()); // Bonjour je m'appelle Romain

const eric = new Contact('Eric');
console.log(eric.hello()); // Bonjour je m'appelle Eric

console.log(eric === romain); // false (2 objet)
console.log(autreMoyenDaccederARomain === romain); // true (1 objet)
console.log(eric.hello === romain.hello); // true (1 objet)

console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false

console.log(romain instanceof Contact); // true
console.log(romain instanceof Object); // true
