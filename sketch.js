var backgroundImage
function preload(){
backgroundImage=loadImage("./assets/background.jpg")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database()

}

function draw(){
background(backgroundImage)
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}