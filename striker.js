class striker {
  constructor(x,y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density': 0.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }

  display(r,g,b) {
      var pos = this.body.position;
      rectMode(CENTER);
      fill(r,g,b);
      ellipse(pos.x, pos.y, this.width, this.height);
  }
}