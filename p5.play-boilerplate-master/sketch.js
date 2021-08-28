var bg,iss,spacecraft1,spacecraft2,spacecraft3,spacecraft4,hasDocked;
function preload() {
  bg = loadImage("spacebg.jpg");
  iss = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png")
}
  
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1)
    }
   
    
  drawSprites();
    }
    function keyPressed(){
      if(keyCode === LEFT_ARROW){
          spacecraft.velocityX = -1;
          spacecraft.addImage("spacecraft3.png");
      }
      if(keyCode === RIGHT_ARROW){
        spacecraft.velocityX = 1;
        spacecraft.addImage("spacecraft4.png");
    }
    if(keyCode === DOWN_ARROW){
      spacecraft.addImage("spacecraft2.png");
  }
  if(keyCode === UP_ARROW){
    spacecraft.velocityY = 1;
}
  }