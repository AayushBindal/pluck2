
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var count=0;
var world,boy;
var launchingForce=200;
var CHECK = 0;
var reset;
var mangoSquese;
var videoGame;

function preload(){
	boy=loadImage("boy.png");
  mangoSquese=loadSound("sound1.wav");
  videoGame=loadSound("videogame.mp3");
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
  videoGame.play();

	stoneObj=new stone(235,420,30);
	mango1=new mango(windowWidth/1.8, windowHeight/2,30);
  mango2=new mango(windowWidth/1.5,windowHeight/3,30);
	mango3=new mango(windowWidth/1.7,windowHeight/1.5,50);
	mango4=new mango(windowWidth/1.55,windowHeight/3+50,30);
	mango5=new mango(windowWidth/1.8,windowHeight/3,30);
	mango6=new mango(windowWidth/1.7,windowHeight/3+150,30);
	mango7=new mango(windowWidth/1.4,windowHeight/3+100,40);
	mango8=new mango(windowWidth/1.56,windowHeight/1.5-100,40);
	mango9=new mango(windowWidth/1.3,windowHeight/3+120,40);
	mango10=new mango(windowWidth/1.45, windowHeight/2+100,40);
	mango11=new mango( windowWidth/1.3, windowHeight/2+100,40);
	mango12=new mango(windowWidth/1.3-150,windowHeight/2+160,35);

	treeObj=new tree(windowWidth/1.45,windowHeight/1);
	groundObject=new ground(width/2,windowHeight-30,width,20);
	launcherObject=new launcher(stoneObj.body,{x:windowWidth/8+20,y:windowHeight/1.6+100-20})
	
	Engine.run(engine);

  reset = createButton("reset");
  reset.position(windowWidth-130, 50);
  let p = createP("Press Space to get a second Chance to Play!!",50 ,50);
  p.position(windowWidth/360, 0);
  p.addClass("p");
}

function draw() {

  background(200);
  image(boy ,windowWidth/8,windowHeight/1.7601,200,300);
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display2();
  mango3.display2();
  mango4.display();
  mango6.display();
  mango7.display2();
  mango8.display2();
  mango9.display();
  mango10.display();
  mango11.display2();
  mango12.display2();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);

  reset.mousePressed(()=>{
	  launcherObject.attach(stoneObj.body);
      
      mango1=new mango(windowWidth/1.8, windowHeight/2,30);
      mango2=new mango(windowWidth/1.5,windowHeight/3,30);
      mango3=new mango(windowWidth/1.7,windowHeight/1.5,50);
      mango4=new mango(windowWidth/1.55,windowHeight/3+50,30);
      mango5=new mango(windowWidth/1.8,windowHeight/3,30);
      mango6=new mango(windowWidth/1.7,windowHeight/3+150,30);
      mango7=new mango(windowWidth/1.4,windowHeight/3+100,40);
      mango8=new mango(windowWidth/1.56,windowHeight/1.5-100,40);
      mango9=new mango(windowWidth/1.3,windowHeight/3+120,40);
      mango10=new mango(windowWidth/1.45, windowHeight/2+100,40);
      mango11=new mango( windowWidth/1.3, windowHeight/2+100,40);
      mango12=new mango(windowWidth/1.3-150,windowHeight/2+160,35);
      count=0;
  })

}

function mouseDragged()
{ if(CHECK===0){
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
}
}

function mouseReleased()
{
	launcherObject.fly();
  CHECK ==1;
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
    count +=1;
    if(count>10){
      Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
      launcherObject.attach(stoneObj.body);  
      mango1=new mango(windowWidth/1.8, windowHeight/2,30);
      mango2=new mango(windowWidth/1.5,windowHeight/3,30);
      mango3=new mango(windowWidth/1.7,windowHeight/1.5,50);
      mango4=new mango(windowWidth/1.55,windowHeight/3+50,30);
      mango5=new mango(windowWidth/1.8,windowHeight/3,30);
      mango6=new mango(windowWidth/1.7,windowHeight/3+150,30);
      mango7=new mango(windowWidth/1.4,windowHeight/3+100,40);
      mango8=new mango(windowWidth/1.56,windowHeight/1.5-100,40);
      mango9=new mango(windowWidth/1.3,windowHeight/3+120,40);
      mango10=new mango(windowWidth/1.45, windowHeight/2+100,40);
      mango11=new mango( windowWidth/1.3, windowHeight/2+100,40);
      mango12=new mango(windowWidth/1.3-150,windowHeight/2+160,35);
      count=1;
    }
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }