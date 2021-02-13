class Log{
    constructor(x,y,height,angle){

        //JSON - JAVASCRIPT OBJECT NOTATION: DATA STRUCTURE: DATA FORMAT
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        this.log = Bodies.rectangle(x,y,20,height, options);
       
        this.width = 20;
        this.height = height;

        Matter.Body.setAngle(this.log, angle);
        World.add(myWorld, this.log );

    }

    display(){
        var pos = this.log.position;
        var angle = this.log.angle;

        
        push();
        
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);


        pop();

    }




}