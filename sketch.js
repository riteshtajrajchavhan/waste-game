
function preload(){
bgImg=loadImage("image/bg1.png");
fourImg=loadAnimation("image/ben.png","image/player.png","image/fourarms.png");
fourImg2=loadAnimation("image/nobita.png","image/krish.png","image/boy.png");
ninjaImg=loadAnimation("ninja.png","player.png");
ninjaImg2=loadAnimation("hero.png","shinko.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  


  back=createSprite(windowWidth/2+2000,windowHeight/2);
  back.addImage(bgImg);
  back.scale=2.6;
  
player=createSprite(windowWidth/2-300,windowHeight/2)
 player.addAnimation("playing",ninjaImg);
player.scale=0.7;

b=createButton("ritesh")
b.position(300,200);


b.style("backgroundColor","red"),
b.style("height",",108Px")
b.mousePressed(move)

edege=createSprite(windowWidth/2-500,windowHeight/2,5,600)
edege.visible=false;


wall1=createSprite(windowWidth/2+2000,windowHeight/2+180,5000,20)
wall1.visible=false;

wall2=createSprite(windowWidth/2+2000,windowHeight/2+170,5000,20)
wall2.visible=false;





}

function draw() { 
  background(0);
  drawSprites();

 

  player.collide(edege)
player.collide(wall1);

  player.velocityY=player.velocityY+1.2;

  if(player.x>500){
    camera.x=player.x;
   }



 if (keyDown(RIGHT_ARROW)) {
  player.x=player.x+15;
  player.addAnimation("runing",ninjaImg);
  }

  
     
 if (keyDown(LEFT_ARROW)) {
  player.x=player.x-10;
  player.addAnimation("runing",ninjaImg2);
 } 


   if(player.isTouching(wall2)){
    if (keyDown(UP_ARROW)) {
      player.velocityY=-15;
      }  
    
    }





  }

function move(){

 player.x=player.x+20;
  player.addAnimation("runing",ninjaImg2);


}
 
  