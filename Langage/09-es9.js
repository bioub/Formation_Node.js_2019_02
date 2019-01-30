const coords = {x: 10, y: 20};

// SPREAD Object
const clone = {...coords, z: 30};
console.log(clone.x);

// REST Object
const {z = 0, ...coords2d} = clone;
console.log(coords2d.x);
console.log(z);

