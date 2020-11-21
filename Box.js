class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.02,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
        //this.image = loadImage("y.png")
       
      }
      display(){
        var angle = this.body.angle
        
        //if(this.body.speed < 3){
          push()
          translate(this.body.position.x, this.body.position.y)
          rotate(angle)
          rectMode(CENTER)
          fill("red")
          rect(0, 0, this.width, this.height)
          if(this.body.speed < 3){

          }

          else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
           }
          pop()
        //}
       // else{
       //   World.remove(world, this.body);
       // }
      }
}