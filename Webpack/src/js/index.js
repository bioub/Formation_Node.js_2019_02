'use strict';

const Horloge = require('./horloge');

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();
