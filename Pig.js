class Pig{
    constructor(x,y){

        //JSON - JAVASCRIPT OBJECT NOTATION: DATA STRUCTURE: DATA FORMAT
        var options = {
            restitution: 0.8,
            friction : 0.3,
            density : 1.0

        }
        this.pig = Bodies.rectangle(x,y,50,50, options);
        World.add(myWorld, this.pig );

        this.width = 50;
        this.height = 50;
    }

    display(){
        var pos = this.pig.position;
        var angle = this.pig.angle;

        
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0, 0, this.width, this.height);


        pop();

    }




}