class Bullets{
    constructor(xCoord, yCoord){
        this.x = xCoord;
        this.y = yCoord;
        this.sz = 15;
        this.s = 10;
    }
    intersects(other){
        let d = dist(this.x, this.y, other.x, other.y);
        if(d < this.sz + (other.sz -10)){
            return true;
        }
        else{
            return false;
        }
    }
    move(){
        this.x = this.x + this.s;
    }
    show(){
        stroke(255,0,0);
        fill(255,0,0);
        ellipse(this.x, this.y, this.sz);
        //ct(this.x, this.y, 5, 25);
    }

    
}