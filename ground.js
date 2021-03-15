class ground{
    constructer(x,y,w,h){
    var Option={
    isStatic:true
    
    
    }
    this.body=Bodies.rectangle(x,y,w,h,Option)
    this.w=w;
    this.h=h;
    World.add(world.this.body)
    }
    display(){
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        
    }

    
    
    }