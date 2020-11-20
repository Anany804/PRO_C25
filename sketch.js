const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const RENDER = Matter.RENDER;
var paper1, paper1Image;
var ground;
var wall1, wall2, wall3;

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
	wall1 = new Wall(600, 380, 20, 80);
	wall2 = new Wall(800, 380, 20, 80);
	wall3 = new Wall(700, 380, 200, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  drawSprites();
	keyPressed();
	ground.display();
	paper1.display();
	wall1.display();
	wall2.display();
	wall3.display();


}

function keyPressed(){
	if (keyCode === SPACE){
		paper1.velocityX = 8;
		paper1.velocityY = -5;
	}
}