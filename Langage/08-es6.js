// REST Params (conversion liste de valeur -> array)
function sum(a, b, ...nbs) {
  let result = a + b;

  nbs.forEach((nb) => { result += nb });

  return result;
}

console.log(sum(1, 2, 3, 4, 5));

// SPREAD operator (conversion array -> liste de valeur)
const nbs = [  1,   2,     3, 4, 5];

function multiply(a, b, c, d, e) {
  return a * b * c * d * e;
}

console.log(multiply(...nbs));

const clone = [...nbs];

// Destructurer
const [one, two,      ,  , five, six = 6] = nbs;
//    [  1,   2,     3, 4, 5]



function *nbs() {
  yield 1;
  yield 2;
}

const gen = nbs();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
