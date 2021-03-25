class Dustbin {
    constructor(x,y,width,height){
        var options ={
            iStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height; 
        world.add(world,this.body);
    
    
    
    }
    display(){
    var pos = this.body.position;
    rectMode(CENTRE);
    fill(255,255,255,0.5);
    rect(pos.x,pos.y,this.width,this.height);

    }
}