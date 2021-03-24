class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':1,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility=255;
    World.add(world, this.body);
  }
  display(){
   
    if(this.body.speed<5){
      var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    push ();
    translate(pos.x,pos.y);
    rotate (this.body.angle);
    rect(0,0, this.width, this.height);
    pop();
   }
   else{
     
     World.remove(world,this.body);
     push();
     this.visibility=this.visibility-5;
     noFill();
     noStroke();
     tint(0,this.visibility);
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
     pop(); 
   }
  }
};