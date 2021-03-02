var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);
    edges = createEdgeSprites();
   //creating surfaces
  surface1=createSprite(90,590,150,20);
  surface1.shapeColor="blue";

  surface2=createSprite(250,590,150,20);
  surface2.shapeColor="orange";

  surface3=createSprite(410,590,150,20);
  surface3.shapeColor="red";

  surface4=createSprite(570,590,150,20);
  surface4.shapeColor="green";

  //creating box
  box = createSprite(random(20,640));
  box.scale=0.2;
  box.shapeColor="white";
  box.velocityX=2;
  box.velocityY=5;  

}

function draw() {
    background(rgb(169,169,169));
   
    

    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
    box.shapeColor="blue";
    music.play();
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
      box.shapeColor="orange";
      music.play();
      }
      if(surface3.isTouching(box)){
        box.shapeColor="red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
        }
        if(surface4.isTouching(box)&&box.bounceOff(surface4)){
          box.shapeColor="green";
          music.play();
          }
          //making bounceOff the box to the edges
          box.bounceOff(edges);
   


  drawSprites();   
}

