
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     box1 = new Box(400,200,600,30)
	 ball1 = new Ball(200,500,30)
	 roof1 = new Roof(ball1.body,{x:200,y:200})
	 ball2 = new Ball(600,500,30)
	 roof2 = new Roof(ball2.body,{x:600,y:200})
	 ball3 = new Ball(300,500,30)
	 roof3 = new Roof(ball3.body,{x:300,y:200})
	 ball4 = new Ball(400,500,30)
	 roof4 = new Roof(ball4.body,{x:400,y:200})
	 ball5 = new Ball(500,500,30)
     roof5 = new Roof(ball5.body,{x:500,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  box1.display();
  ball1.display();
  roof1.display();
  ball2.display();
  roof2.display();
  ball3.display();
  roof3.display();
  ball4.display();
  roof4.display();
  ball5.display();
  roof5.display();
  drawSprites();
 
}



