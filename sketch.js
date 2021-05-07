var bow , arrow,  scene;
var redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
 
  createCanvas(displayWidth,displayHeight)
  //creating background
  scene = createSprite(0,0,displayWidth,displayHeight);
  scene.addImage(backgroundImage);
  scene.scale = 5
  
  // creating bow to shoot arrow
  bow = createSprite(displayWidth-100,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
  background("lightblue");
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY

  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  
  drawSprites();
  
 if(arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
 }
  if(arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
   arrowGroup.destroyEach();
  }
  if(arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
   arrowGroup.destroyEach();
  }
  if(arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
   arrowGroup.destroyEach();
  }
  
  
  
  createArrow();
    
  drawSprites();
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, displayHeight)), 10, 10);
  camera.position.y=red.y
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 400;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, displayHeight)), 10, 10);
  camera.position.y=blue.y
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 400;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, displayHeight)), 10, 10);
  camera.position.y=green.y
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 400;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20,displayHeight)), 10, 10);
  camera.position.y=pink.y
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 400;
  pink.scale = 1
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
    if(keyDown("space")){
    var arrow= createSprite(displayWidth-100,100, 60, 10);
  arrow.addImage(arrowImage);
  
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 400;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  }
  
   
}





