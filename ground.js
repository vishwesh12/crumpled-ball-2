class Ground{
    constructor(x,y,width,height){
        var options ={
            iStatic:true
        }

        this.body=Bodies.rectangle(600,500,1200,15,options);
        this.width=1200;
        this.height=15; 
        world.add(world,this.body);
    
    
    
    }
    display(){
    var pos = this.body.position;
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);

    }
}