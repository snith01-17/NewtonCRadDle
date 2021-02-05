const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3, bobObj4,bobObj5, roofObj;
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObj=new roof(750,100,750,60);

	bobObj1=new Bob(550,550,100);
	bobObj2=new Bob(650,550,100);
	bobObj3=new Bob(750,550,100);
	bobObj4=new Bob(850,550,100);
	bobObj5=new Bob(950,550,100);

	rope1=new Rope(bobObj1.body,roofObj.body,-200, 0)
	rope2=new Rope(bobObj2.body,roofObj.body,-100, 0)
	rope3=new Rope(bobObj3.body,roofObj.body,0, 0)
	rope4=new Rope(bobObj4.body,roofObj.body,100, 0)
	rope5=new Rope(bobObj5.body,roofObj.body,200, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObj.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
 
}



