const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const authenticate = require('../../middlewares/authenticate');

describe('#authenticate', () => {

  it('should return status 401', () => {
    const res = {
      json() {}
    };

    authenticate({headers:{}}, res);

    expect(res.statusCode).to.equals(401);
  });

  it('should call next when logged', () => {
    const res = {
      json() {}
    };

    const req = {
      headers: {
        authorization: 'd4973653-9895-4123-a7dd-3e1387d0fbde',
      }
    };

    let called = false;
    const next = () => {
      called = true;
    };

    authenticate(req, res, next);
    expect(called).to.be.true;
  });

  it('should call next when logged', () => {
    const res = {
      json() {}
    };

    const req = {
      headers: {
        authorization: 'd4973653-9895-4123-a7dd-3e1387d0fbde',
      }
    };

    const next = sinon.spy();

    authenticate(req, res, next);
    expect(next).to.be.called;
  });

});
