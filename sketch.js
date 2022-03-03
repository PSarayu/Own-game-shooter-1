var player,alien,teamMates
var bg




function preload(){
bg=loadImage("bgimage.jpg")
}

function setup(){
createCanvas(displayWidth-3,displayHeight-140)
player=createSprite(displayWidth/2,displayHeight-200,50,50)
player.shapeColor="black"
}

function draw(){
background(bg)


drawSprites();
}

function shoot(){

}