var gameState = "Start";
var gameLevel = 0;
var gameTitle, playButton;
var button1, button2, button3, button4, button5, button6;

function preload()
{
  bg = loadImage("images/bg.jpg");
  rocketImg = loadImage("images/Rocket.png");
  rockImg1 = loadImage("images/meteor.png");
  rockImg2 = loadImage("images/asteroids.png");
}
function setup() {
  canvas = createCanvas(800,400);
  gameTitle = createElement('h1');
  gameTitle.position(200, 20);
  gameTitle.html("A Look Into Another World");

  playButton = createButton("PLAY");
  playButton.position(400, 300);
  playButton.mousePressed(() => {
    gameState = "levels";
  })

  button1 = createButton("1");
  button1.position(200, 100);

  button2 = createButton("2");
  button2.position(400, 100);

  button3 = createButton("3");
  button3.position(600, 100);

  button4 = createButton("4");
  button4.position(200, 300);

  button5 = createButton("5");
  button5.position(400, 300);

  button6 = createButton("6");
  button6.position(600, 300);

  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button6.hide();
}

function draw() {
  background(bg);
  
  if (gameState === "levels")
  {
    gameTitle.hide();
    playButton.hide();

    button1.show();
    button2.show();
    button3.show();
    button4.show();
    button5.show();
    button6.show();
  }

  button1.mousePressed(() =>{

    
    gameState = "level1";
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();

    rocket = createSprite(400, 350, 40, 80);
    rocket.addImage("flying", rocketImg);
    rocket.scale = 0.2

    spawnCelestialBodies();
  })

  drawSprites();
}

function spawnCelestialBodies()
{
  if(frameCount % 50 === 0)
  {
    rocks = createSprite(random(0, 800), -10);
    rand = Math.round(random(1, 2));
    rocks.addImage(rockImg + rand);
    rocks.scale = random(0.1, 0.3);
    rocks.setVelocityY = -5;
  }
}