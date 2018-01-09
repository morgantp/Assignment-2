let population;
//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {

  population = loadJSON("worldpopulation.json");
}
function draw(){
  noStroke();
  //China Circle
  fill(255, 0, 0);
  ellipse(640, 250, 500, 500);
  //India Circle
  fill(255, 150, 0);
  ellipse(200, 250, 381, 381);
  //US Circle
  fill(0, 0, 255);
  ellipse(369, 557, 320, 320);
  //var randomNumber = round(random(195));
  fill(0);
  textSize(40);
  textAlign(CENTER)
  //China Text
  text("" + population[0].country, 640, 220);
  text("" + population[0].population, 640, 280);
  //India Text
  textSize(30);
  text("" + population[1].country, 200, 225);
  text("" + population[1].population, 200, 275);
  //US Text
  textSize(30);
  text("" + population[2].country, 370, 535)
  text("" + population[2].population, 370, 585)
  }

function setup() {
  console.log(population); //Return all JSON data
  createCanvas(1280, 720);
  background(255);
  noLoop();
}
