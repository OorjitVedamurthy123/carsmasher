var cars,cars2,cars3;
var carGroup;
var car1Img,car2Img,car3Img;
var backgroundImg;
var bike;
var speed;
function preload(){
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car3.png");
  //car4Img = loadImage("car4.png");
  backgroundImg = loadImage("track.png");
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
 // createSprite(400, 200, 50, 50);
  speed = -20;
 
 
 carGroup = new Group();
 bike = new Player(speed);
}

function draw() {
  background("black");
  //image(backgroundImg, 0,-displayHeight*4,displayWidth, displayHeight*5);
 // cars.display(); 
  //spawnCars();
  bike.display();
  drawSprites();
  
}
function spawnCars(){
  if(World.frameCount % 100 === 0) {
    cars = createSprite(random(300,1000),-1000,60,40);
    cars2 = createSprite(random(300,1000),-1000,60,40);
    cars3 = createSprite(random(300,1000),-1000,60,40);
  
    cars.velocityY = +30;
    cars2.velocityY = +20;
    cars3.velocityY = +40;
    
    cars.shapeColor = "white"
    cars.addImage(car1Img);
    cars2.addImage(car2Img);
    cars3.addImage(car3Img);
    cars.scale = 2;
    cars2.scale = 2;
    cars3.scale = 2;
    cars.rotate = 180;
    
    carGroup.add(cars,cars2,cars3);
  }
  }
   