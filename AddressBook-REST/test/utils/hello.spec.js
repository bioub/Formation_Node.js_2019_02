const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should;
should();
const hello = require('../../utils/hello');

describe('#hello', () => {

  it('should return Bonjour je m\'appelle Romain !', () => {
    assert.strictEqual(hello('Romain'), 'Bonjour je m\'appelle Romain !');
    expect(hello('Romain')).to.equals('Bonjour je m\'appelle Romain !');
    hello('Romain').should.equals('Bonjour je m\'appelle Romain !');
  });

});
