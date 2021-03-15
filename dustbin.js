class dustbin{
    constructer(x,y){
    var Option={
    isStatic:true,
    }
    this.body1=Bodies.rectangle(x,y,200,20,Option)
    this.body2=Bodies.rectangle(x-90,y-50,20,100,Option)
    this.body3=Bodies.rectangle(x+90,y-50,20,100,Option)
    
    World.add(world,this.body1)
    World.add(world,this.body2)
    World.add(world,this.body3)
    
}

    display(){
        rectMode(CENTER)
        fill('green')
        rect(this.body1.position.x,this.body1.position.y,200,20)
        rect(this.body2.position.x,this.body2.position.y,20,100)
        rect(this.body3.position.x,this.body3.position.y,20,100)
    }
    
    
    }