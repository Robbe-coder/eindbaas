class Snow{
    constructor(){
        strokeWeight(1);
        
        this.x =1200;
        this.y = random(0,800);
        this.s = random(1,2);
        this.sz = random(30,50);
    }

    show(){
        noStroke();
        fill(255);
        circle()
        circle(this.x, this.y,this.sz);
    }
    move(){
        this.x -=this.s;
        //this.x = 800;
    }
     


}