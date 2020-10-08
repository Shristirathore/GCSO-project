var car,wall;
var speed,weight;
var START =2;
var PLAY =1;
var RESTART=0;
var gameState =START;

function setup(){
createCanvas(1280,610);

speed =random(55,90);
  weight=random(400,1500);
car=createSprite(50,90,50,50);
car.shapeColor="pink";
wall =createSprite(1200,100,60,100);
car2=createSprite(50,300,50,50);
car2.shapeColor="pink";
wall2=createSprite(1200,300,60,100);
car3=createSprite(50,510,50,50);
car3.shapeColor="pink";
wall3=createSprite(1200,500,60,100);

wall.shapeColor="azure";
wall2.shapeColor="azure";
wall3.shapeColor="azure";

}
function draw(){
background("black");
if(gameState===START){
  
  //textSize(30);
fill("white")
textSize(30);
text("Welcome to car deformation checkup",440,200);
textSize(26);
text("where we used to do smarter crash test for cars",440,250);
text("(Press space to start testing)",440,350);

if(keyDown("space")){
  gameState = PLAY;
}
}
if(gameState===PLAY){

  
  border=createSprite(640,200,1280,20);
  border.shapeColor="lightgrey";
  border1=createSprite(640,400,1280,20);
  border1.shapeColor="lightgrey";
  
  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;


if(wall.x-car.x<(car.width +wall.width)/2
 && wall2.x-car2.x<(car2.width +wall2.width)/2
 && wall3.x-car3.x<(car3.width +wall3.width)/2){

 
car.velocityX=0;
car3.velocityX=0;
 car2.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  car.shapeColor=color(255,0,0);
  car2.shapeColor=color(255,0,0);
  car3.shapeColor=color(255,0,0);
  fill("white");
  textSize(30);
  text("Deformation=*lethal",500,50);
  text("Deformation=*lethal",500,250);
  text("Deformation=*lethal",500,450);
}
if(deformation<180 && deformation>100){
car.shapeColor=color(230,230,0);
car2.shapeColor=color(230,230,0);
car3.shapeColor=color(230,230,0);
fill("white");
  textSize(30);
  text("Deformation=*average",500,50);
  text("Deformation=*average",500,250);
  text("Deformation=*average",500,450);
  textSize(20);
  
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
  car2.shapeColor=color(0,255,0);
  car3.shapeColor=color(0,255,0);
  fill("white");
  textSize(30);
  text("Deformation=*good",500,50);
  text("Deformation=*good",500,250);
  text("Deformation=*good",500,450);
  

  }


 }

 drawSprites();

}


}
