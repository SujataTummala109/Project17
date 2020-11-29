
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivaltime;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey = createSprite(80,310,20,20);
  monkey.addAnimation("monkey",monkey_running)
  
 monkey.scale = 0.1;
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
background("pink");
 
  if(keyDown("space"))
    {
      monkey.velocityY = -10;
    }
   monkey.velocityY = monkey.velocityY + 0.5;
  if(ground.x<0)
    {
      ground.x = ground.width/2;
    }
 
  
  food();
  spawnObstacle();
  monkey.collide(ground);
  drawSprites();
   stroke(0);
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivaltime,100,50);
}

function food()
{
  if(frameCount%80 === 0)
    {
      banana = createSprite(600,100,10,10);
      banana.addImage(bananaImage)
      banana.scale = 0.1;
      banana.velocityX = -4;
      banana.y = Math.round(random(120,200));
      
      FoodGroup.add(banana);
      banana.lifetime = 200;
    }
}

function spawnObstacle()
{
   if(frameCount%300 === 0){
     obstacle = createSprite(400,360,40,10);
     obstacle.addImage(obstaceImage);
     obstacle.scale= 0.08;
     obstacle.velocityX = -6;
     
     obstacle.lifettime = 200;
     obstacleGroup.add(obstacle);
     
   }
}





