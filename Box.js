class Box {
  constructor(x,y,width,height){
    this.body=Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world,this.body);
  }
  display() {
   if(this.body.speed < 3){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("pink");
    fill("white");
    rect(0,0,this.width,this.height);
    pop();
   }
   else{
    World.remove(world,this.body);
     push ();
     this.Visibility = this.Visibility - 5;
     //tint(255,this.Visibility);
     //image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop ();
   } 
  }
}

function score(){
  if(this.Visibility < 0 && this.Visibility > -105){
    score = score+1;
  }
}
