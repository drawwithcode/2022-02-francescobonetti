let Compasses = []
let CompassColors = ['#FF99C8', '#FCF6BD', '#D0F4DE', '#A9DEF9', '#E4C1F9']

function setup() {
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES)
  rectMode(CENTER)
  stroke(0)

  const incx = width/15
  const incy = height/15

  for(let x = incx; x < width-1; x+=incx) {
    for(let y = incy; y < height-1; y+=incy){
      Compasses.push(new Compass(x, y, 0))
    }
  }
}



function draw() {
    background(255);

  for(let i = 0; i < Compasses.length; i++) {Compasses[i].move();


  }
  

  

}

function mouseMoved() {
  for(let i = 0; i < Compasses.length; i++) {Compasses[i].follow()}
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



class Compass {

  constructor(xpos, ypos, angle) {
    this.x = xpos;  
    this.y = ypos;
    this.r = angle;

    this.c = random(CompassColors);
  }

  move() {

    let roff = random(0, 360);
    roff = roff +  0.1;
    let n = noise(roff) * 2;

    this.r += n 
  
    push();

    translate(this.x, this.y);
    rotate(this.r);
    fill(this.c)
    
    rect(0, 0, 10, height/15*90/100, 5);


    pop()

    
  }

  follow() {
    if(mouseX < this.x){
      this.r = acos((mouseY - this.y)/dist(mouseX, mouseY, this.x, this.y) )
    } else {this.r = -acos((mouseY - this.y)/dist(mouseX, mouseY, this.x, this.y))}

    push();

    translate(this.x, this.y);
    rotate(this.r);
    fill(this.c)

    rect(0, 0, 10, height/15*90/100, 5);

    pop()
   
  }

}
