const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var shelf1,shelf2,polygon
var slingShot,ground;
var polygon_img;
var score = 0;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground(width/2, 590,800,20);
    shelf1 = new Ground(400,480,200,20);
    shelf2 = new Ground(650,280,200,20);
   
    //shelf 1, level 1
    box1 = new Box(340,450,30,30);
    box2 = new Box(370,450,30,30);
    box3 = new Box(400,450,30,30);
    box4 = new Box(430,450,30,30);
    box5 = new Box(460,450,30,30);
    //shelf 1, level 2
    box6 = new Box(355,420,30,30);
    box7 = new Box(385,420,30,30);
    box8 = new Box(415,420,30,30);
    box9 = new Box(445,420,30,30);
    //shelf 1, level 3
    box10 = new Box(370,390,30,30);
    box11 = new Box(400,390,30,30);
    box12 = new Box(430,390,30,30);
    //shelf 1, level 4
    box13 = new Box(385,360,30,30);
    box14 = new Box(415,360,30,30);
    //shelf 1, level 5
    box15 = new Box(400,330,30,30);
    
    //shelf 2, level 1
    box16 = new Box(590,250,30,30);
    box17 = new Box(620,250,30,30);
    box18 = new Box(650,250,30,30);
    box19 = new Box(680,250,30,30);
    box20 = new Box(710,250,30,30);
    //shelf 2, level 2
    box21 = new Box(605,220,30,30);
    box22 = new Box(635,220,30,30);
    box23 = new Box(665,220,30,30);
    box24 = new Box(695,220,30,30);
    //shelf 2, level 3
    box25 = new Box(620,190,30,30);
    box26 = new Box(650,190,30,30);
    box27 = new Box(680,190,30,30);
    //shelf 2, level 4
    box28 = new Box(635,160,30,30);
    box29 = new Box(665,160,30,30);
    //shelf 2, level 5
    box30 = new Box(650,130,30,30);

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    
    //ball holder with slings
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new Slingshot(this.polygon,{x:100,y:200});

    
}

function draw(){
    background(0);
    textSize(20);
    fill("lightblue");
    text("SCORE: "+ score,600,40);
    
    shelf1.display();
    shelf2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    ground.display();
    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
      slingShot.attach(polygon);
    }
  }

  