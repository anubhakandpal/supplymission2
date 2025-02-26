class Wall {
    constructor() {
      var options = {
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(300, 20,20,100,options);
      this.width = 20;
      this.height = 100; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };