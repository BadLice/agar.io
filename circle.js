class Circle
{
    constructor(x,y,r,fillc,strokec)
    {
      this.x=x;
      this.y=y;
      this.r=r;
      this.fillc=fillc;
      this.strokec=strokec;
    }

    draw()
    {
      stroke(this.strokec);
      fill(this.fillc);
      ellipse(this.x,this.y,this.r*2)
    }

    collision(o)
    {
      if(dist(o.x,o.y,this.x,this.y)<=abs(this.r))
        return true;
      else
        return false;

    }
}
