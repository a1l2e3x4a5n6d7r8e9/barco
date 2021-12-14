var barco, imgbarco
var sea, imgsea
function preload(){
    imgbarco = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
    imgsea = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
     sea = createSprite(200,220,200,10);
     sea.addImage(imgsea);
    sea.scale = 0.2;
   barco = createSprite(200,200,100,20);
   barco.addAnimation("F", imgbarco);
   barco.scale = 0.2;

     
  
}

function draw() {
  background("blue");
    drawSprites();

 
}
