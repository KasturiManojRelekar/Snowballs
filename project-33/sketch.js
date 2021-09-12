var snowfall1,snowfall2,snowfall3,snowfall4,snowfall5,snowfall6,snow,snowbg;

function preload(){
 snowbg = loadImage("snow3.jpg");
snow = loadAnimation("snow25.png","Snow7.png")

}

function setup() {
  createCanvas(800,400);

  snowfall1 = createSprite(500,300,20,20);
  snowfall1.addAnimation("s",snow);
  snowfall1.scale = 0.2;

  snowfall2 = createSprite(650,180,20,20);
  snowfall2.addAnimation("s",snow);
  snowfall2.scale = 0.2;

  snowfall3 = createSprite(500,95,20,20);
  snowfall3.addAnimation("s",snow);
  snowfall3.scale = 0.2;

  snowfall4 = createSprite(200,95,20,20);
  snowfall4.addAnimation("s",snow);
  snowfall4.scale = 0.2;

  snowfall5 = createSprite(80,300,20,20);
  snowfall5.addAnimation("s",snow);
  snowfall5.scale = 0.2;

  snowfall6 = createSprite(300,300,20,20);
  snowfall6.addAnimation("s",snow);
  snowfall6.scale = 0.2;
}

function draw() {
  background(snowbg);  
  drawSprites();
}