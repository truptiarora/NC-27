const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const  Constraint = Matter.Constraint;

var roof1;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5


function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof1 = new roof(300,200,250,30);


	bob1 = new bob(400,450,40);
	bob2 = new bob(440,450,40);
	bob3 = new bob(480,450,40);
	bob4 = new bob(520,450,40);
	bob5 = new bob(560,450,40);

	rope1 = new rope(bob1.body,roof1.body,-100, 10);
	rope2 = new rope(bob2.body,roof1.body,-60, 10);
	rope3 = new rope(bob3.body,roof1.body,-22, 10);
	rope4 = new rope(bob4.body,roof1.body,20, 10);
	rope5 = new rope(bob5.body,roof1.body,60, 10);


}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
  

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //keyPressed();

}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:65,y:-55});

		


	}

}