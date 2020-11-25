class Ball{
    constructor(x,y,r){
        var options={
           restitution:0.3,
           friction:0.3,
           density:1.0,
          isStatic:true
        }
    this.body=Bodies.circle(x,y,r,options)
    this.r=r
   
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    //translate(pos.x,pos.y)
    //rotate(angle)
    ellipseMode(CENTER)
    strokeWeight(4)
    fill("white")
    ellipse(pos.x,pos.y,40,40)
    pop()
    }
}
