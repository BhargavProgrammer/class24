/*
We are using matter.js lib

1. create phy engine
2. create a world
3. create a bodies

var--stores a value, and that value will vary from time to time

const--stores a value, but it will not change


*/
//giving nick name-- nameSpacing
const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World = Matter.World;

var myEng;
var myWorld;
var ground;
var ball;
var box1;

function setup() {
  createCanvas(1200,400);
  //createSprite(400, 200, 50, 50);

  myEng = Engine.create();
  myWorld= myEng.world;

  box1 = new Box(700,320, 70,70);
  console.log(box1);

  box2 = new Box(920, 320,70,70);

  //box3 = new Box(600,50,50,50);

  pig1 = new Pig(810,350);

  log1 = new Log(810, 260, 300, PI/2)

  ground1 = new Ground(600,370,1200,20);

}

function draw() {
  background("pink");  

  Engine.update(myEng);

  box1.display();
  box2.display();
  ground1.display();
  pig1.display();
  log1.display();

}