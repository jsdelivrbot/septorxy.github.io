var isGameOver;
var player;
var enemy;
var playerImage;
var enemyImage;
var backgroundImage;
var endGameImage;
var spaget = new Audio("spaget_sound.mp3");

function preload(){
    playerImage = loadImage("https://i.imgur.com/mZwZWIq.png");
    enemyImage = loadImage("https://i.imgur.com/IcwmtSs.png")
    backgroundImage = loadImage("https://i.imgur.com/jYripRF.png");
    endGameImage = loadImage("https://i.imgur.com/6sZS7Ls.png");
}
function setup(){
    isGameOver = false;
    createCanvas(256, 256);
    player = createSprite(width/2, height-(playerImage.height/2), 0, 0);
    player.addImage(playerImage);
    enemy = createSprite(width/2, 0, 0, 0)
    enemy.addImage(enemyImage);
}
function draw(){
    if(isGameOver){
        gameOver();
    } else {
    if(enemy.overlap(player)){
        isGameOver = true;
    }
    
    background(backgroundImage);
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-(playerImage.width/2))) {
        player.position.x = player.position.x + 2;
    }
    
    if (keyDown(LEFT_ARROW) && player.position.x > (playerImage.width/2)) {
        player.position.x = player.position.x - 2;
    }
    
    enemy.position.y = enemy.position.y + 4;
    
    if (enemy.position.y > height) {
         enemy.position.y = 0;
         enemy.position.x = random(5, width-5);
    }
    drawSprites();
    }
}

function gameOver() {
     background(endGameImage);
     textAlign(CENTER);
     fill("white");
     text("Game Over!", width/2, height/2);
     text("Click anywhere to try again", width/2, 3*height/4);
     spaget.play();
}
function mouseClicked() {
     if(isGameOver){
        isGameOver = false;
        player.position.x = width/2;
        player.position.y = height-(playerImage.height/2);
        enemy.position.x = width/2;
        enemy.position.y = 0;
     }
}



