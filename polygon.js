class Polygon{
    constructor(x,y){
        var options ={
            isStatic : false ,
            density : 1
        }
        this.radius = 20
        this.image = loadImage("polygon.png")
        this.body = Bodies.circle(x,y,this.radius,options)

        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        fill("black")
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
        
    }
}