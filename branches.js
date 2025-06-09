let balls = []


function setup() {
  createCanvas(1200, 1200)
  let trunk = new Circles(width/2, height - height/3, 50)
  trunk.generateTrunk()
}

function draw() {
  background(222)

    for (let ball of balls) {
    ball.display();
    }
}

class Circles {

  constructor(starterXPos, starterYPos, starterRadius){
    this.ballXPos = starterXPos
    this.ballYPos = starterYPos
    this.ballRadius = starterRadius
    
    this.colorTop = color(random(60, 100), random(40, 70), random(20, 50));
    this.colorBottom = color(random(100, 150), random(60, 100), random(30, 80));

    this.StrokeColor = color(0)
    this.StrokeWeight = 0
  }
  
  generateTrunk() {
    const segments = 5
    let y = this.ballYPos
    let x = this.ballXPos

    for (let i=0; i<segments; i++){
      let r = random(20, 100)
      balls.push(new Circles(x, y, r))
      y -= r
    }
  }


  display() {

    push()

    translate(this.ballXPos, this.ballYPos)

    stroke(this.StrokeColor)
    strokeWeight(this.StrokeWeight)

    fill(this.colorTop)
    arc(0,0, this.ballRadius, this.ballRadius, PI/2, (3*PI)/2, PIE)

    fill(this.colorBottom)
    arc(0,0, this.ballRadius, this.ballRadius, (3*PI)/2, PI/2)


    pop()
    
  }

}