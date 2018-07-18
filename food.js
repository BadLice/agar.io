class Food
{
  constructor(maxLife,num)
  {
    var buff = 1
    this.pool=[];
    for(var i=0;i<num;i++)
    {
      this.pool.push(Food.nextFood());
    }
  }

  draw()
  {
    for(var o of this.pool)
      o.draw();
  }

  update()
  {
    if(random(1)<0.05)
      this.pool.push(Food.nextFood());
  }

  static nextFood()
  {
    var next = new Circle(random(-width*10/2,width-10/2),random(-height*10/2,height*10/2),10*randomOne(),color(0,0,0),color(255,255,255));

    if(next.r>=0)
      next.fillc=color(0,255,0);
    else
      next.fillc=color(255,0,0);

      return next;
  }
}

function randomOne()
{
    var n = random(-1,1)
    if(n>=0)
      return 1;
    else
      return -1;
}
