class Dustbin {
    constructor(x,y,width,height){
        var options ={
           restitution:0,
           friction:0,
           density:1.2

        }

        this.body=Bodies.circles(250,540,20,options);
        this.width=33;
        this.Image= loadImage("sketch/paper.png");
        world.add(world,this.body);
    
    
    
    }
    display(){
    var pos = this.body.position;
    var angle = this.body.position;
       fill("white");
      rotate(amgle);
      imageMode(CENTRE)
    image(this.image ,pos.x,pos.y,33,33);

    }
}