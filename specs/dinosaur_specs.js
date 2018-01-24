const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 2);
  });

  it('get type of dinosaur', function(){
    assert.strictEqual(dinosaur.type, 'T-Rex');
  });

  it('get offspring value', function(){
    assert.strictEqual(dinosaur.offspring, 2);
  });

})
