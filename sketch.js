const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


var bg ;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
     // create getBackgroundImg( ) here
     getBackgroundImg();

}

function draw(){

    // add condition to check if any background image is there to add
     background(bg);

    Engine.update(engine);

    // write code to display time in correct format here

    
}

async function getBackgroundImg(){

    // write code to fetch time from API
     var response = await fetch("http://worldclockapi.com/api/json/cst/now")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.currentDateTime;

    // write code slice the datetime
   
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
       if(hour >=04 && hour <=06){
           bg = "sunrise1.png";
       }else if(hour >=06 && hour <=08){
           bg = "sunrise2.png";
       }else if(hour >=23 && hour <=0){
           bg = "sunset10.png";
       }else if(hour >=0 && hour <=03){
           bg = "sunset11.png";
       }else{
           bg = "sundet12.png";
       }
        
    //load the image in backgroundImg variable here
      backgroungImg = loadImage(bg);
}
