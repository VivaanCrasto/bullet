var mrect,rect;

function setup() {
  createCanvas(800,400);
  
  mrect = createSprite(600,200,30,100);
  mrect.shapeColor =  "red" ;
o1 = createSprite(100,200,20,20)
o1.shapeColor = "blue"

}

function draw() {
  background("black"); 
o1.x = World.mouseX;
o1.y = World. mouseY;
if(istouching(o1,mrect)){
  o1.shapeColor = "green"
}
else{
  o1.shapeColor = "blue"
  
  
} 

drawSprites();
}