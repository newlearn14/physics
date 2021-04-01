const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,400,10,object_options);
    World.add(world,ground);
   
    var balloptions={
     restitution:1
    }

    ball=Bodies.circle(200,200,20,balloptions)
    World.add(world,ball);

   


    //console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,10);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20);
}
