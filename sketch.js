
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400, 200, 260, 20);

	bobObject1 = new Bob(300,400,3);
	bobObject2 = new Bob(350,400,3);
	bobObject3 = new Bob(400,400,3);
	bobObject4 = new Bob(450,400,3);
	bobObject5 = new Bob(500,400,3);

	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();
  
  rope1.display();

 
}



