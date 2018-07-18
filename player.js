class Player
{
    constructor(circle,speed)
    {
      this.circle=circle;
      this.realPosX=0;
      this.realPosY=0;
      this.speed=speed;
    }

    draw()
    {
        this.circle.draw();
    }

    update()
    {
      this.move();
      this.eat();
    }

    move()
    {
      var mx = map(mouseX,0,width,-width/2,width/2);
      var my = map(mouseY,0,height,height/2,-height/2);

      var angle = atan2(my,mx);
      var food = getFood();

      var notReachedBoundariesX = !(this.realPosX<-width*10/2) && !(this.realPosX>width*10/2);

      var notReachedBoundariesY = !(this.realPosY<-height*10/2) && !(this.realPosY>height*10/2);


      for(var i=0;i<food.length;i++)
      {
        if(notReachedBoundariesX)
          food[i].x-=cos(angle)*this.speed;
        if(notReachedBoundariesY)
          food[i].y+=sin(angle)*this.speed;

      }
      if(notReachedBoundariesX)
        this.realPosX-=cos(angle)*this.speed;
      if(notReachedBoundariesY)
        this.realPosY+=sin(angle)*this.speed;

      if(!notReachedBoundariesX)
      {
        var buffx=this.realPosX;

        this.realPosX-=cos(angle)*this.speed;

        var nrb = !(this.realPosX<-width*10/2) && !(this.realPosX>width*10/2);

        if(!nrb)
        {
          this.realPosX=buffx;
        }
      }

      if(!notReachedBoundariesY)
      {
        var buffy=this.realPosY;
        this.realPosY+=sin(angle)*this.speed;
        var nrb = !(this.realPosY<-height*10/2) && !(this.realPosY>height*10/2);

        if(!nrb)
        {
          this.realPosY=buffy;
        }
      }

      setFood(food);
    }

    eat()
    {
      var food = getFood();
      var newFood = [];

      for(var o of food)
      {
        if(this.circle.collision(o))
        {
          this.circle.r+=o.r;
        }
        else
        {
          newFood.push(o);
        }
      }

      setFood(newFood);
    }
}
