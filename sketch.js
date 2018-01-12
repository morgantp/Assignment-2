let population;
//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {

  population = loadJSON("worldpopulation.json");
}

function setup() {
  console.log(population); //Return all JSON data
  var canvas = createCanvas(1280, 720);

}

function draw(){
  //noLoop();
  frameRate(0.10);
  background(255);
  console.log(population[2].population / 1000000);
  for (let i=0; i<50; i++){
    let newSize = population[i].population / 2000000;
    let newPosX = random(1280);
    let newPosY = random(720);
    var r = newSize;
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(newPosX, newPosY, newSize, newSize);
    fill(0);
    textAlign(CENTER);
    textSize(15);
    text(population[i].country, newPosX, newPosY-10);
    text(population[i].population, newPosX, newPosY+10);
  }
  /*
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
  //Indonesia Circle
  fill(125, 0, 0);
  ellipse(809, 590, 260, 260);
  //Brazil Circle
  fill(0, 125, 0);
  ellipse(976, 404, 240, 240);
  //Pakistan Circle
  fill(200, 255, 0);
  ellipse(976, 195, 180, 180);
  //Nigeria Circle
  fill(0, 255, 100)
  ellipse(138, 508, 150, 150);
  //Bangladesh Circle
  fill(0, 255, 0);
  //ellipse(100, 100,

  //var randomNumber = round(random(195));
  fill(255);
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
  text("" + population[2].country, 370, 535);
  text("" + population[2].population, 370, 585);
  //Indonesia Text
  textSize(20);
  text("" + population[3].country, 809, 570);
  text("" + population[3].population, 809, 610);
  //Brazil Text
  text("" + population[4].country, 976, 384);
  text("" + population[4].population, 976, 424);
  //Pakistan Text
  fill(0);
  text("" + population[5].country, 967, 175);
  text("" + population[5].population, 967, 215);
  //Nigeria Text
  textSize(15);
  text("" + population[6].country, 138, 493);
  text("" + population[6].population, 138, 523);
  */
}
