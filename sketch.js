var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,600);
  speed = random(55,90)
  weight = random(400,1500)
 car = createSprite(50, 200, 20, 20);
 wall = createSprite(1200,200,20,height/2);
 car.velocityX = speed;
}

function draw() {
  background("black"); 
  if(wall.x-car.x < (car.width+wall.width)/2){
   car.velocityX = 0;
   var deformation = 0.5 *weight *speed *speed/22509;
   if(deformation < 100){
    car.shapeColor = color("green");
  } 
   if(deformation < 180 && deformation > 100){
     car.shapeColor = color(230,230,0);
   }
   if(deformation > 180){
    car.shapeColor = color("red");
  }
  } 
  drawSprites();
}