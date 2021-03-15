
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   


	engine = Engine.create();
	world = engine.world;
	Paper=new paper(100,100,50,50);
	Dustbin=new dustbin(650,650);
	Ground=new ground(400,670,800,20);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Paper.display();
  Ground.display();
  Dustbin.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode == UP_ARROW) {
		Body.applyForce(Paper.body, Paper.body.position, { x: 30, y: -40 });
	}
}




