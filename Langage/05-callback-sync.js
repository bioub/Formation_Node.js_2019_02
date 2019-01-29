const nbs = [4, 5, 6];

// paradigme impératif (style impératif : avec des structures if, for..)
for (let i = 0; i < nbs.length; i++) {
  const elt = nbs[i];
  if (elt % 2 === 0) {
    console.log(elt);
  }
}

// paradigme functionnel
nbs
//.filter(function(elt) { return elt % 2 === 0 })
.filter((elt) => elt % 2 === 0)
.forEach((nb, i) => console.log(nb, i));

// pile d'appels
// ^
// |               log  log
// |=> - => - =>   => - =>
// |filter       - forEach
// +--------------------------> temps
//                 4    6
