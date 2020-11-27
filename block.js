class Box{
    constructor(x,y){
       var options={
           restitution:0.8,
           friction:1.0,
           density:0.04
       }
       this.body = Bodies.rectangle(x,y,70,70)
       World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("green")
        rectMode(CENTER)
        rect(0,0,70,70)
        pop()
    }

}