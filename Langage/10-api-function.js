// 'use strict';

function hello(name) {
  return `Hello ${name}, my name is ${this.name}`;
}

global.name = 'Glob';

const contact = {
  name: 'Romain',
};


console.log(hello('Roger'));
console.log(hello.call(contact, 'Roger'));
console.log(hello.apply(contact, ['Roger']));
console.log(hello.call(contact, ...['Roger']));

const helloContact = hello.bind(contact); // ES5
console.log(helloContact('Roger'));

/*
Function.prototype.bind = function(applyThis) {
  var fct = this;
  return function() {
    return fct.apply(applyThis, arguments);
  }
};
*/
