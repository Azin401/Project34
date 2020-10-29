//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload(){
dog=loadImage("sprites/dogImg.png");
dogsprite=createSprite(100,200,30,20);

	//load images here
}

function setup() {
	createCanvas(500, 500);
  
}


function draw() {  
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  drawSprites();
  //add styles here

}



