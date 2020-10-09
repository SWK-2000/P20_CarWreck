var car,wall;
var speed,weight;
var deformation;
var object1,object2;

function setup() {
  createCanvas(1200,400);
  
  speed=random(30,90);
  weight=(300,1500);

  deformation=0.5*weight*speed*speed/22500;

  car=createSprite(50,200,70,20);
  car.shapeColor="white";
  car.velocityX=speed/5; 

  wall=createSprite(1100,200,60,height/2);

 


}


function draw() {
  background("black");  
  drawSprites();

  if (isTouching(car,wall)){
 
    car.velocity=0; 
    

    console.log(deformation);
     
      if(deformation<100){
       car.shapeColor="green"; 
      }
      
      if(deformation>100){
       car.shapeColor="yellow";
      }
  
      if(deformation>180){
       car.shapeColor="red";
      }
      car.y=200;

  }
}

function isTouching(car,wall){
  if(car.x-wall.x<car.width/2+wall.width/2 &&                                                                        
   wall.x-car.x<wall.width/2+car.width/2&&
   car.y-wall.y<car.height/2+wall.height/2 &&                                                                        
   wall.y-car.y<wall.height/2+car.height/2){
     return true;

 
 }
  else {
     return false;        
  } 
} 