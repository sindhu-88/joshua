const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, boxes;
var b,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,g,g1;
var strike, slingshot;
var bg, backgroundImg;
var score = 0;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,1000);
  boxes = [];
  b = new Box(600,575,50,50);
  boxes.push(b);
  b2 = new Box(550,575,50,50);
  boxes.push(b2);
  b3 = new Box(650,575,50,50);
  boxes.push(b3);
  b4 = new Box(500,575,50,50);
  boxes.push(b4);
  b5 = new Box(700,575,50,50);
  boxes.push(b5);
  b6 = new Box(600,550,50,50);
  boxes.push(b6);
  b7 = new Box(550,550,50,50);
  boxes.push(b7);
  b8 = new Box(650,550,50,50);
  boxes.push(b8);
  b9 = new Box(500,550,50,50);
  boxes.push(b9);
  b10 = new Box(700,550,50,50);
  boxes.push(b10);
  b11 = new Box(800,775,50,50);
  boxes.push(b11);
  b12 = new Box(750,775,50,50);
  boxes.push(b12);
  b13 = new Box(775,750,50,50);
  boxes.push(b13);
  g = new Ground(600,600,400,20);
  g1 = new Ground(800,800,400,20);
  strike = new striker(200,600,50,50);
  slingshot = new SlingShot(strike.body,{x:200, y:600});
}

function draw() {
  mkbackground();
  if(backgroundImg) {
    background(backgroundImg);
    text("Score : "+score,width-300,50);
  }
  Engine.update(engine);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].score();
  }
  g.display();
  g1.display();
  strike.display(255,255,255);
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(strike.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32) {
    Matter.Body.setPosition(strike.body, {x : 200, y : 600});
      slingshot.attach(strike.body);
  };
};

async function mkbackground() {
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if (hour <= 6) {
    bg = "bgg.jpg";
  } else {
    bg = "bgp.jpg";
  }
  backgroundImg = loadImage(bg);
}