var mr,fr;
var gobj1,gobj2;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
   mr  = createSprite(600,400,50,80);
   gobj1 = createSprite(100,50,50,50);
   gobj2 = createSprite(200,50,50,50);
  mr.shapeColor ="green";
  mr.debug = true;
   fr = createSprite(400,200,80,30)
fr.shapeColor = "green";
fr.debug = true;

}

function draw() {
  background(255,255,255);  
mr.x = World.mouseX;
mr.y = World.mouseY;
if(isTouching(gobj1,mr)){
gobj1.shapeColor = "blue";
mr.shapeColor = "blue";
}
else {
  gobj1.shapeColor = "green";
mr.shapeColor = "green";
}
  drawSprites();
}
function isTouching(obj1,obj2){
  if(    obj2 .x<obj1.width/2+obj2.width/2 && obj2.x-obj1.x<obj1.width/2+obj2.width/2 
    && obj1.y-obj2.y<obj1.height/2+obj2.height/2 && obj2.y-obj1.y<obj1.height/2+fr.height/2){
      return true;
    }
    else {
      return false;
    }
  
}