const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(sinonChai);
chai.use(chaiHttp);

const Contact = require('../models/contact');
const app = require('../app');

describe('GET /api/contacts', () => {

  beforeEach(() => {
    // Si DB, mongoimport d'un jeu de données de tests
  });

  it('should return status 200', async () => {
    const mock = sinon.mock(Contact);

    const contacts = [{prenom: 'Romain'}];
    mock.expects('find').resolves(contacts);

    const res = await chai.request(app)
      .get('/api/contacts');

    expect(res).to.have.status(200);
    expect(res.body[0].prenom).to.equals('Romain');
  });

});
