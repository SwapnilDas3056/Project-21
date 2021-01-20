var canvas, edges, box, surface1, surface2, surface3, surface4;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,560,180,40);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,560,180,40);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500,560,180,40);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(700,560,180,40);
    surface4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)),20,20,20);
    box.shapeColor = "white";
    box.velocityY = 10;
    box.velocityX = Math.round(random(-5,5));

    //create edgeSprite
    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));

    if(box.isTouching(edges[1])||box.isTouching(edges[3])){
        box.velocityX = -(box.velocityX);
    }
    if(box.isTouching(edges[0])||box.isTouching(edges[2])){
        box.velocityY = -(box.velocityY);
    }

    bounceOff(box,surface1);
    bounceOff(box,surface2);
    bounceOff(box,surface3);
    bounceOff(box,surface4);

    if(box.x - surface1.x <= box.width/2 + surface1.width/2
        && surface1.x - box.x <= box.width/2 + surface1.width/2
        && box.y - surface1.y <= box.height/2 + surface1.height/2
        && surface1.y - box.y <= box.height/2 + surface1.height/2)

    drawSprites();
}
function bounceOff(object1,object2){
    if(object1.x - object2.x <= object1.width/2 + object2.width/2
    && object2.x - object1.x <= object2.width/2 + object1.width/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2
    && object2.y - object1.y <= object2.height/2 + object1.height/2){
        object1.velocityY = -(object1.velocityY);
        object1.shapeColor = object2.shapeColor;
        }
}