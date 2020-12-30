const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ob_opt = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,30,ob_opt);
  World.add(world, ground);
  var ball_options={
    restitution: 1
  }
  ball=Bodies.circle(200,200,50,ball_options);
  console.log(ground);
  World.add(world,ball);
}

function draw() {
  background(0); 
   
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);
   fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);
}