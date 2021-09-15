const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function preload(){
  bg = loadImage("assets/background.png")
}

function setup() 
{
  createCanvas(400,550);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,530,600,20);

  rope = new Rope(7,{x:200,y:30});
  fruit = Bodies.circle(200,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(bg);
  rope.display();
  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  //ground.display();

 
   
}