
let x = 300; //x value of dragon 
let y = 250; //y value of dragon
let arsenal = []; //array om kogels in op te slaan 
let snowballs = []; //array om sneeuwballen in op te slaan
let lives = 3; //levens van de draak

let interval;
let score = 0;

function setup() {
    createCanvas(1200, 800); //wemaken hier onze canvas aan   
    textSize(20); //hier wordt de fontsize van de text bepaald
    interval = setInterval(newSnowBall, 1000);
    dragon = new Player(x, y); //draakaanmaken 
}

function draw() {
    
    background(45, 52, 50);
    backgroundDrawing(600,200);
    dragon.move(5);
    dragon.show();
    fill(255);
    text("score:" + " " + score, 800, 50);
    hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
    //timer();
    //snowballs.show();
    //loopen door de 2 arrays en checken of ze elkaar raken;
    for (let i = 0; i < arsenal.length; i++) {
        for (let j = 0; j < snowballs.length; j++) {

            if (arsenal[i].intersects(snowballs[j])) { //als de kogel de sneeuwbal raakt dan moet het volgende gebeuren
                snowballs.splice(j, 1); //de sneeuwbal wodt uit de array gehaald
                score += 1000;
                //arsenal.splice(i,1);
            }
        }
    }

    for (let i = 0; i < arsenal.length; i++) {
        arsenal[i].show();
        arsenal[i].move();
    }
    for (let i = 0; i < snowballs.length; i++) {
        snowballs[i].show();
        snowballs[i].move();

    }

    for (let i = 0; i < snowballs.length; i++) {

        if (dragon.hits(snowballs[i])) {
            //console.log('game over');
            snowballs.splice(i, 1);
            lives--;


        }
    }
    noStroke();
    fill(255);
    text("lives:" + " " + lives, 500, 50);

    if (lives <= 0) {
        lives == 0;
        gamover();
        noLoop();

    }
}



function gamover() {
    rectMode(CENTER);
    fill(118, 36, 251);
    rect(600, 400, 300, 200);
    fill(255);
    textSize(30);
    text("game over", 525, 400);
    textSize(15);
    text("your score is:" + " " + score, 525, 430);
    text("press CTRL/ cmd + R to start over", 490, 490);
}

function keyPressed() {
    
    
      if(keyIsDown(32)){
          
          bullet = new Bullets(dragon.x + 220, dragon.y); //we geven hier de startwaarde van de kogel mee
          arsenal.push(bullet); //we sturen deze naar een array zodat we deze er uit kunne halen in de draw
          //console.log("shoot");
      } 
        
}

function newSnowBall() {
    bal = new Snow(); //hier wordt er telkens een nieuwe object aangemaakt
    snowballs.push(bal); //deze wordt dan vervolgens in de array met sneeuwballen gestoken
}

function backgroundDrawing(x,y){
    
    stroke(200);
    fill(200);
    line(x-500, y+600, x-300, y);
    line(x-300, y, x-100, y+600);
    line(x-150,y+440,x,y-50);
    line(x,y-50,x+150,y+400);
    line(x+100, y+600, x+230, y+100);
    line(x+230, y+100, x+430, y+600);
    beginShape(); //berg 1 sneeuw 
    vertex(x-300, y);
    vertex(x-400,y+300);
    vertex(x-330, y+250);
    vertex(x-280, y+330);
    vertex(x-260, y+250);
    vertex(x-200, y+300);
    endShape();
    beginShape(); //berg 2 sneeuw
    vertex(x,y-50);
    vertex(x-46, y+100);
    vertex(x-10, y+40);
    vertex(x, y+150);
    vertex(x+43, y+80);
    endShape();
    beginShape();
    vertex(x+230, y+100);
    vertex(x+178, y+300);
    vertex(x+220, y+250);
    vertex(x+240, y+320);
    vertex(x+260, y+260);
    vertex(x+280, y+300);
    vertex(x+290, y+250);
    endShape();

}