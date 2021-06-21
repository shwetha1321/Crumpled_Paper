class Paper {
    constructor(x,y){
        var options = {
            'restitution' : 0.3,
            'friction' : 0,
            'density' : 1.2
            
        }
        this.paperimg = loadImage("paper.png")
        this.body = Bodies.circle(x,y,30,options)
        World.add(world,this.body);
        this.radius = 50;
    }

    display(){
      var paperpos = this.body.position
      push();
      translate(paperpos.x,paperpos.y)
    
      image(this.paperimg,0,0,this.radius,this.radius)
        pop();
    }
}