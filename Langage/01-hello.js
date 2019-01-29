const prenoms = ['Romain', 'Pierre'];

/**
 * Fonction qui salue quelqu'un
 * @param {string} prenom La personne à saluer
 * @returns {string} Le message de salutation
 */
function hello(prenom) {
  return 'Bonjour ' + prenom;
}

for (let i = 0; i < prenoms.length; i++) {
  const p = prenoms[i];
  console.log(hello(p));
}
