const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var paddle1, paddle2;
var platform;
var hexagon, slingshot;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


   
    platform = new Ground(150, 305, 300, 170);
    paddle1 = new paddle1()
    paddle2 = new paddle1()

    b1 = new Box();
    b2 = new Box(920,320,70,70);
    b3 = new Box(810, 350);
    b4 = new Box(810,260,300, PI/2);

    b5 = new Box(700,240,70,70);
    b6 = new Box(920,240,70,70);
     b7= new Box(810, 220);

     b8=  new Box(330,245,30,40);

     b9 = new Box(360,245,30,40);
     b10= new Box(390,245,30,40);
     b11= new Box(420,245,30,40);
     b12 = new Box(450,245,30,40);

     b13 = new Box(360,195,30,40);

     b14 = new Box(390,195,30,40);
     b15 = new Box(420,195,30,40);

     b16 = new Box(390,155,30,40);
     b17 = new Box(30,40)
     b18 = new Box (30,40)
     b19 =new Box(30,40)
     b20 =new Box(30,40)
     b21=new Box(30,40)
     b22 =new Box(30,40)
     b23 =new Box(30,40)
     b24=new Box(30,40)
     b25 =new Box(30,40)

    hexagon = new Hexagon(200,50);

    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}
function draw(){
  
    Engine.update(engine);
   
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();

    hexagon.display();
    platform.display();
    paddle1.display()
    paddle2.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}