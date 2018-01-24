const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function(){
    park = new Park();
    dinosaur = new Dinosaur('T-Rex', 2);
    dinosaur1 = new Dinosaur('Big', 2);
    dinosaur2 = new Dinosaur('Small', 2);
    dinosaur3 = new Dinosaur('Medium', 2);
    dinosaur4 = new Dinosaur('Big', 2);
  });

  it('park is empty', function(){
    assert.strictEqual(park.dinosaurs.length, 0);
  })

  it('can add dinosaur', function(){
    park.addDino(dinosaur);
    assert.strictEqual(park.dinosaurs.length, 1)
  })

  it('can find dinosaur by type', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    var result = park.findByType("Medium");
    assert.strictEqual(result, dinosaur3);
  })

  it('can removeByType', function(){
    park.addDino(dinosaur);
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.addDino(dinosaur4);
    var result = park.removeByType("Medium");
    assert.strictEqual(park.dinosaurs.length, 4);
  })





})
