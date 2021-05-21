
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,200,3);
	bobObject2 = new Bob(200,300,3);
	bobObject3 = new Bob(200,400,3);
	bobObject4 = new Bob(200,500,3);
	bobObject5 = new Bob(200,600,3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



