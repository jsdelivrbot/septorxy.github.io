var isGameOver;
var player;
var enemy;
var enemy2;
var enemy3;
var playerImage;
var enemyImage;
var backgroundImage;
var endGameImage;
var spaget = new Audio("spaget_sound.mp3");
var scoreCounter = 0;

function preload(){
    playerImage = loadImage("https://i.imgur.com/mZwZWIq.png");
    enemyImage = loadImage("https://i.imgur.com/IcwmtSs.png")
    backgroundImage = loadImage("https://i.imgur.com/jYripRF.png");
    endGameImage = loadImage("https://i.imgur.com/6sZS7Ls.png");
}
function setup(){
    isGameOver = false;
    createCanvas(500, 500);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0)
    enemy2 = createSprite(width/2, 0, 0, 0)
    enemy3 = createSprite(width/2, 0, 0, 0)
    enemy.addImage(enemyImage);
    enemy2.addImage(enemyImage);
    enemy3.addImage(enemyImage);
    
}
function draw(){
    if(isGameOver){
        gameOver();
    } else {
    if(enemy.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player)){
        isGameOver = true;
    }
    
    background(backgroundImage);
    
    fill("Red");
    text("Points; " + scoreCounter, width-60, height/15);
    
    if (((keyDown(RIGHT_ARROW))|| (keyDown(68))) && player.position.x < (width-(playerImage.width/2))) {
        player.position.x = player.position.x + 2;
    }
    
    if (((keyDown(LEFT_ARROW))|| (keyDown(65))) && player.position.x > (playerImage.width/2)) {
        player.position.x = player.position.x - 2;
    }
    
    enemy.position.y = enemy.position.y + 7;
    enemy2.position.y = enemy.position.y + 10;
    enemy3.position.y = enemy.position.y + 3;
    
    if (enemy.position.y > height) {
         scoreCounter++;
         enemy.position.y = 0;
         enemy.position.x = random(5, width-5);
    }
    if (enemy2.position.y > height) {
         enemy2.position.y = 0;
         enemy2.position.x = random(5, width-5);
    }
    if (enemy3.position.y > height) {
         enemy3.position.y = 0;
         enemy3.position.x = random(5, width-5);
    }
    drawSprites();
    }
}

function gameOver() {
     background(endGameImage);
     textAlign(CENTER);
     fill("Red");
     text("Game Over!\nYou scored " + scoreCounter + " points.", width/2, height/2-10);
     text("Click anywhere to try again", width/2, 3*height/4-10);
     spaget.play();
}
function mouseClicked() {
     if(isGameOver){
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy2.position.x = width/2;
        enemy3.position.x = width/2;
        enemy.position.y = 0;
        enemy2.position.y = 0;
        enemy3.position.y = 0;
        scoreCounter = 0;
     }
}
function keyPressed() {
  if (keyCode == 32 || keyCode == 37 || keyCode == 39 || keyCode== 65 || keyCode == 68) {
      if(isGameOver){
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy2.position.x = width/2;
        enemy3.position.x = width/2;
        enemy.position.y = 0;
        enemy2.position.y = 0;
        enemy3.position.y = 0;
        scoreCounter = 0;
     }
  }
}


