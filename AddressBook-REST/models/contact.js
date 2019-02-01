const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: [true, 'Le prénom est obligatoire'],
  },
  nom: {
    type: String
  }
});

// contactSchema.pre('find', (docs) => {
//   //next();
// });

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
/*
const contacts = [{
  prenom: 'Romain',
  id: 123,
}, {
  prenom: 'Jean',
  id: 54,
}, {
  prenom: 'Paul',
  id: 312,
}];

function generateId() {
  // acc: 0, {id: 123} => 123
  // acc: 123, {id: 54} => 123
  // acc: 123, {id: 312} => 312
  const maxId = contacts.reduce((acc, c) => c.id > acc ? c.id : acc, 0);
  return maxId + 1;
}

function find() {
  return Promise.resolve(contacts);
}

function findById(id) {
  id = Number(id);
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return Promise.resolve(null);
  }

  return Promise.resolve(contact);
}

function create(contact) {
  contact.id = generateId();

  contacts.push(contact);

  return Promise.resolve(contact);
}

function findByIdAndDelete(id) {
  id = Number(id);
  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return Promise.resolve(null);
  }

  const index = contacts.indexOf(contact);
  contacts.splice(index, 1);

  return Promise.resolve(contact);
}


function findByIdAndUpdate(id, newContact) {
  id = Number(id);
  const contact = contacts.find((c) => c.id === id);
  newContact.id = id;

  if (!contact) {
    return Promise.resolve(null);
  }

  const index = contacts.indexOf(contact);
  contacts[index] = newContact;

  return Promise.resolve(contact);
}

exports.find = find;
exports.findById = findById;
exports.create = create;
exports.findByIdAndDelete = findByIdAndDelete;
exports.findByIdAndUpdate = findByIdAndUpdate;
*/
