var canvas;
var music;
var surf1,surf2,surf3,surf4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surf1 = createSprite(103,577,200,40);

surf2 = createSprite(308,577,200,40);

surf3 = createSprite(513,577,200,40);

surf2 = createSprite(718,577,200,40);


box = createSprite(random(20,750));
box.velocityX +=3
box.velocityY +=4



    //create box sprite and give velocity

}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    
   
    
    //add condition to check if box touching surface and make it box

    


    drawSprites()
}
