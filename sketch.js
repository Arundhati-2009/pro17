
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  
  FoodGroup=new Group();
  obstaclesGroup=new Group();
  
  score=0;
}


function draw() {
background("white");
  
  if (ground.x<0){
    ground.x=ground.width/2;
    
  }
  stroke("white");
  textSize(20);
  text("score: "+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text ("Survival Time: "+survivalTime,100,50)
  
  if(keyDown("space")){
    monkey.velocityY=-10;
    
  }
monkey.velocityY=monkey.velocityY+2;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacles();
  
  
  
  
 drawSprites();   
}
function spawnFood(){
  if (frameCount%200==0){
    banana=createSprite(600,150,250,40);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.lifetime=300;
    banana.Y=random(120,300);
    banana.velocityX=-2;
    monkey.depth=banana.depth+1;
    FoodGroup.add(banana);
  }
  
}
function spawnObstacles(){
  if (frameCount%200==0){
  obstacle=createSprite(300,320,30,40);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
  obstacle.lifetime=300;
  obstacle.velocityX=-2;
  obstaclesGroup.add(obstacle);
  }
}
 




