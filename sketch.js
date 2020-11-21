const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paper1;
var ground;
var bin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 390, 1200, 10);
	paper1 = new Paper(200, 200, 10);
	bin = new Bin(800, 20, 10, 10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  
  drawSprites();
	keyPressed();
	ground.display();
	paper1.display();
	bin.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
    
  	}
}
