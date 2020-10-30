class Box {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density': 0.3
        }
        this.image = loadImage('./block.png');
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        World.add(world, this.body);
    }

    display() {
        
        if(this.body.speed < 3) {
            var pos = this.body.position;
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.width, this.height);
        
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,0,0,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }
    }

    score() {
        if(this.Visiblity<0 && this.Visiblity>-105) {
            score= score + 50;
        }
    }

}