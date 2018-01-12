let population;
//The preload function is executed before initializing the code in setup
//Loads any related data or media files
function preload() {

  population = loadJSON("worldpopulation.json"); //tells the code to access the JSON file when population is referenced
}

function setup() {
  console.log(population); //Return all JSON data
  var canvas = createCanvas(1280, 720); //creates the canavs and sets the size of it

}

function draw(){
  //noLoop();
  frameRate(0.10); //sets it up so the code loops at a slower rate
  background(255); //sets the background colour as white
  console.log(population[2].population / 1000000); //console log recording the population of india but showing as dvided by 1000000
  for (let i=0; i<50; i++){ // sets a value for i and tells the code to access the top 50 results
    let newSize = population[i].population / 2000000; //sets a size variable based off the population number however divided by 2000000
    let newPosX = random(1280); //sets a x value variable as random
    let newPosY = random(720); //does the same for the y value
    noStroke(); // makes the ellipse not have strokes
    fill(random(255), random(255), random(255)); //makes the colour of circles random
    ellipse(newPosX, newPosY, newSize, newSize); //draws an ellipse and makes it appear on a random area with the size related to the population
    fill(0); // sets the fill to black
    textAlign(CENTER); //sets it so text is aligned from its center
    textSize(15); //sets text size as 15
    text(population[i].country, newPosX, newPosY-10); //sets up the text to display the country name. the coordinates ensure the text is placed on the correct circle
    text(population[i].population, newPosX, newPosY+10); //sets up the text to display the population number. the coordinates do the same as country text
  }
}
