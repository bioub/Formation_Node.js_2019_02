const { EventEmitter } = require('events');

const ee = new EventEmitter();

function createUser(name) {
  // TODO async write in DB
  process.nextTick(() => {
    ee.emit('user.created', name);
  });
}



// code utilisera createUser
ee.on('user.created', (name) => {
  // TODO send SMS
  console.log('SMS sent to ' + name);
});



// code utilisera createUser
ee.once('user.created', (name) => {
  // TODO send Email
  console.log('SMS email to ' + name);
});




createUser('Toto');
createUser('Titi');
console.log('Fin');

