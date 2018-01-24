const Park = function(){
  this.dinosaurs = [];
};

Park.prototype.addDino = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.findByType = function(type){
  for (var i = 0; i < this.dinosaurs.length; i++) {
    if(type === this.dinosaurs[i].type){
      return this.dinosaurs[i].type;
    }
  }
}

Park.prototype.removeByType= function(type){
  this.dinosaurs = this.dinosaurs.filter(dino => dino.type !== type);
}


module.exports = Park;
