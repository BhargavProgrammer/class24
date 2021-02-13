class Ground{
        constructor(x,y,width,height){
            var options1 = {
                isStatic : true,
                
            }
     this.ground = Bodies.rectangle(x,y,width,height,options1);
     World.add(myWorld, this.ground);       

     this.width = width;
     this.height = height;
        }

        display()
{   rectMode(CENTER);
    fill("brown");
    var pos2 =  this.ground.position
    rect(pos2.x,pos2.y,this.width,this.height);

}

}