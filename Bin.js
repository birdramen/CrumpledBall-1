class Bin{

    constructor(x,y,width,height)
    
    
    {
    
    var options={
        'isStatic':true,
        'density':1
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    
    display(){
    
    var pos=this.body.position;
    var rand = random(0,255);
    push();
    
    rectMode(CENTER);
    fill(rand,rand,rand);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    
    
    
    
    }
    
    
    
    }