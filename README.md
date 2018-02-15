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
var speedEnemy1 = 7;
var speedEnemy2 = 10;
var speedEnemy3 = 3;
var player2Image;
var enemy2Image;
var background2Image;
var endGame2Image;
var startBackground;
var verified = false;

function preload(){
    playerImage = loadImage("https://i.imgur.com/7G8SpFi.png");
    player2Image = loadImage("https://i.imgur.com/jVKZRP2.png");
    enemyImage = loadImage("https://i.imgur.com/DlhBQKi.png");
    enemy2Image = loadImage("https://i.imgur.com/Q89CEok.png");
    background2Image= loadImage("https://i.imgur.com/i3qe3qH.jpg");
    backgroundImage = loadImage("https://i.imgur.com/jYripRF.png");
    endGameImage = loadImage("https://i.imgur.com/6sZS7Ls.png");
    endGame2Image = loadImage("https://i.imgur.com/iYMtIwH.png");
    startBackground = loadImage("https://i.imgur.com/E7oTq2F.png");
}
function setup(){
    isGameOver = false;
    createCanvas(500, 500);
    background(startBackground);
    fill("Red");
    text("Welcome! Press 1 for spaget minigame and 2 for thonk minigame",width/6, height/2+50);

}

function draw(){
    do{
        if(keyDown(49)){
            verified = true;
            choice = 1;
            player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
            enemy = createSprite(width/2, 0, 0, 0)
            enemy2 = createSprite(width/2, 0, 0, 0)
            enemy3 = createSprite(width/2, 0, 0, 0)
            player.addImage(playerImage);
            enemy.addImage(enemyImage);
            enemy2.addImage(enemyImage);
            enemy3.addImage(enemyImage);
        }
        if(keyDown(50)){
            verified = true;
            choice = 2;
            player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
            enemy = createSprite(width/2, 0, 0, 0)
            enemy2 = createSprite(width/2, 0, 0, 0)
            enemy3 = createSprite(width/2, 0, 0, 0)
            player.addImage(player2Image);
            enemy.addImage(enemy2Image);    
            enemy2.addImage(enemy2Image);   
            enemy3.addImage(enemy2Image);   
        }    
    }while(verified == false);
    if(verified == true){
        if(isGameOver){
            gameOver();
        } else {
        if(enemy.overlap(player) || enemy2.overlap(player) || enemy3.overlap(player)){
            isGameOver = true;
        }
        if(choice == 1){
            background(backgroundImage);
        }
        if(choice == 2){
            background(background2Image);
        }
        
        
        fill("Red");
        text("Points; " + scoreCounter, width-60, height/15);
        
        if (((keyDown(RIGHT_ARROW))|| (keyDown(68))) && player.position.x < (width-(playerImage.width/2))) {
            player.position.x = player.position.x + 2;
        }
        
        if (((keyDown(LEFT_ARROW))|| (keyDown(65))) && player.position.x > (playerImage.width/2)) {
            player.position.x = player.position.x - 2;
        }
        
        enemy.position.y = enemy.position.y + speedEnemy1;
        enemy2.position.y = enemy.position.y + speedEnemy2;
        enemy3.position.y = enemy.position.y + speedEnemy3;
        
        if (enemy.position.y > height) {
             scoreCounter++;
             enemy.position.y = 0;
             enemy.position.x = random(5, width-5);
             if(scoreCounter == 10 || scoreCounter == 20 || scoreCounter == 30 || scoreCounter == 40 || scoreCounter == 50 || scoreCounter == 60){
                 speedEnemy1++;
             }
        }
        if (enemy2.position.y > height) {
             enemy2.position.y = 0;
             enemy2.position.x = random(5, width-5);
             if(scoreCounter == 10 || scoreCounter == 20 || scoreCounter == 30 || scoreCounter == 40 || scoreCounter == 50 || scoreCounter == 60){
                 speedEnemy2++;
             }
        }
        if (enemy3.position.y > height) {
             enemy3.position.y = 0;
             enemy3.position.x = random(5, width-5);
             if(scoreCounter == 10 || scoreCounter == 20 || scoreCounter == 30 || scoreCounter == 40 || scoreCounter == 50 || scoreCounter == 60){
                 speedEnemy3++;
             }
        }
        drawSprites();
        }
    }
}

function gameOver() {
     if(choice == 1){
         background(endGameImage);
     }
     if(choice == 2){
         background(endGame2Image);
     }
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
        speedEnemy1 = 7;
        speedEnemy2 = 10;
        speedEnemy3 = 3;
        
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
        speedEnemy1 = 7;
        speedEnemy2 = 10;
        speedEnemy3 = 3;
     }
     if(keyCode == 49){
         if(isGameOver || verified == false){
             
         }
     }
  }
}

