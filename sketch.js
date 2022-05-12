const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;

var chao;

var block1, block2, block3;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

//Crie os Corpos Aqui.
  var chao_options = {
    isStatic: true
  }

  var block1_options = {
    restitution: 0.5  ,
    friction: 0.02  ,
    frictionAir:0
  }

  var block2_options = {
    restitution: 0.7  ,
    friction: 0.01  ,
    frictionAir: 0.1
  }

  var block3_options = {
    restitution: 0.01   ,
    friction: 1  ,
    frictionAir: 0.3
  }


  chao = Bodies.rectangle(400,590,800,20,chao_options);
  World.add(world,chao);

  block1 = Bodies.circle(220,10,10,block1_options);
  World.add(world, block1);
  
  block2 = Bodies.rectangle(110,50,10,10,block2_options);
  World.add(world, block2);

  block3 = Bodies.rectangle(350,50,10,10,block3_options);
  World.add(world, block3);

}

function draw() {
  background("black");  

ellipseMode(RADIUS);
fill("pink")
ellipse(block1.position.x, block1.position.y, 30);

rectMode(CENTER);
fill("blue")
rect(block2.position.x,block2.position.y,60,60)

rectMode(CENTER);
fill("purple")
rect(block3.position.x,block3.position.y,80,40)

  rectMode(CENTER);
  fill(0);
  rect(chao.position.x,chao.position.y,800,20);



  Engine.update(engine);
}



