//const { LEFT_ARROW, UP_ARROW, RIGHT_ARROW } = require("./p5");

class Player{
    constructor(Xcoord,Ycoord){
        this.x = Xcoord; 
        this.y = Ycoord;
    }
    show(){
    
        noStroke();
        // noStroke(); //geenstroke toevoegen aan de figuur 
        strokeWeight(1);
        fill(241, 92, 54); //figuur vullen in kleur
        //drakenlichaam
        triangle(this.x - 60, this.y, this.x - 20, this.y - 30, this.x - 20, this.y + 30);
        ellipse(this.x, this.y, 40, 40);
        ellipse(this.x + 40, this.y, 40, 40);
        ellipse(this.x + 80, this.y, 40, 40);
        ellipse(this.x + 120, this.y, 40, 40);
        rectMode(CENTER); //het tekenpunt van het hoofd van de draak centeren 
        //drakenhoofd
        rect(this.x + 180, this.y, 80, 40);
        fill(0);
        ellipse(this.x + 205, this.y - 7, 10, 10); //oog
        fill(118, 38, 225);
        triangle(this.x + 220, this.y, this.x + 200, this.y + 20, this.x + 220, this.y + 20); //mond
        triangle(this.x + 220, this.y - 20, this.x + 200, this.y - 20, this.x + 210, this.y - 40); //voorste hoorn
        triangle(this.x + 200, this.y - 20, this.x + 180, this.y - 20, this.x + 190, this.y - 30); //middelste hoorn
        triangle(this.x + 180, this.y - 20, this.x + 160, this.y - 20, this.x + 170, this.y - 25); //laatste hoorn
        //vleugel
    
        strokeWeight(5);
        beginShape();
        vertex(this.x + 120, this.y);
        vertex(this.x + 100, this.y - 70);
        vertex(this.x + 40, this.y - 110);
        vertex(this.x + 20, this.y - 80);
        vertex(this.x + 60, this.y - 60);
        vertex(this.x + 40, this.y - 40);
        vertex(this.x + 120, this.y);
        endShape();

        //box rond de draak 
        rectMode(CORNER)
       
        noFill();
        rect(this.x-60,this.y-25,280,50);

        //this.y = constrain(this.y,0,height-100);
        
    }
    

    hits(snow){
        return collideRectCircle(this.x-60, this.y-25, 280, 50, snow.x, snow.y, snow.sz);
    }
    move(speed){
        if(keyIsDown(LEFT_ARROW)){
            this.x -= speed;
        }
        if(keyIsDown(UP_ARROW)){
            this.y -= speed;
        }
        if(keyIsDown(RIGHT_ARROW)){
            this.x += speed;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.y += speed;
            
        }
    }  

}