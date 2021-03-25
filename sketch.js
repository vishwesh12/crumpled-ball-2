
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
var ground,ball;
var bining,bin;

function preload(){
	bining = loadImage("sketch/dustbin.png");
}


function setup() {
	 createCanvas(1200,600);
	 engine=Engine.create();
	 world=Engine.world;

	 ground= new Ground();
	 crumpledPaper=new Paper();

	 bin=createSprite(964,520,20,20);
	 bin.addImage(bining);
	 bin.scale=0.45;
	 
	 binPart1=new Dustbin(902,505,10,120);
	 binPart2=new Dustbin(962,505,130,10);
	 binPart3=new Dustbin(1024,505,10,120);

	
  
}


function draw() {
 background("black");
 Engine.update(engine);
 rectMode(CENTER);
 background(0);

 bin.display.display();
 crumpledPaper.display();
 binPart1.display();
 binPart2.display();
 binPart3.display();





 function keyPressed(){
if  (keyCode===UP_ARROW){
	Matter.Body.applyforce(crumpledPaper.body,crumpledPaper.body.position)
	x:12
	y:-13	
	}
}
 }


 

  
 rectMode=(CENTER);
