/*
Classes : BluePrint
Properties and functions
We can create many objects

*/

class Box{
    constructor(x,y,width,height){

        //JSON - JAVASCRIPT OBJECT NOTATION: DATA STRUCTURE: DATA FORMAT
        var options = {
            restitution: 0.2
        }
        this.wbox = Bodies.rectangle(x,y,width,height, options);
        World.add(myWorld, this.wbox );

        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.wbox.position;
        var angle = this.wbox.angle;

        
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);


        pop();

    }




}

