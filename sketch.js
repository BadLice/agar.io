var player;
var food;
function setup()
{
    createCanvas(800,600);
    player = new Player(new Circle(0,0,30,color(255,255,255),color(255,0,0)),4);
    food = new Food(10,200)
}

function draw()
{
  background(0)
  translate(width/2,height/2);
  food.draw();
  player.draw();

  player.update();
  food.update();

  drawBoundaries();
}

function drawBoundaries()
{
  stroke(255);
  noFill();
  rect(0-(width*10/2)+player.realPosX,0-(height*10/2)+player.realPosY,width*10,(height*10));
}

function getFood()
{
  return food.pool;
}

function setFood(newFood)
{
    food.pool=newFood;
}
