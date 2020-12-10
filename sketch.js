
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var roofObject;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
	//rope2=new rope(bobObject2.body, )
	//rope3=new rope(bobObject3.body, )
	//rope4=new rope(bobObject4.body, )
	//rope5=new rope(bobObject5.body, )

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(310,250,15);
	bobObject2=new bob(340, 250, 15);
	bobObject3=new bob(370, 250, 15);
	bobObject4=new bob(400,250,15);
	bobObject5=new bob(430,250,15);

	roofObject=new roof(370, 100, 250, 20);

	rope1=new rope(bobObject1.body, {x:310, y:100})
	rope2=new rope(bobObject2.body, {x:340, y:100})
	rope3=new rope(bobObject3.body, {x:370, y:100})
	rope4=new rope(bobObject4.body, {x:400, y:100})
	rope5=new rope(bobObject5.body, {x:430, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-6, y:-6});
	}
}

