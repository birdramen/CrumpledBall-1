
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,bin1,bin2,bin3;


function preload()
{





}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ball1 = new Ball(100,350,20);
	
	bin1 = new Bin(550,650,150,20);

	bin2 = new Bin(485,610,20,50);

	bin3 = new Bin(615,610,20,50);

	ground = new Ground(600,670,1200,20)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 keyPressed();

  ball1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
}






function keyPressed(){
	if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:85});

	}
}



