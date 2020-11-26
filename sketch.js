var minuteHand,secondHand,hourHand;
var minuteAngle,secondAngle,hourAngle;

function setup(){
     canvas = createCanvas(400,400);
    angleMode(DEGREES);
  
}

function draw(){
    background(0);
    translate(200,200);
    rotate(-90);
    hourHand=hour();
    minuteHand=minute();
    secondHand=second();
    secondAngle=map(secondHand,0,60,0,360);
    minuteAngle=map(minuteHand,0,60,0,360);
    hourAngle=map(hourHand%12,0,12,0,360);
    push();
    rotate(secondAngle);
    stroke(255,0,0);
    strokeWeight(6);
    line(0,0,100,0);
    pop();

    push();
    rotate(minuteAngle);
    stroke(0,255,0);
    strokeWeight(8);
    line(0,0,75,0);
    pop();

    push();
    rotate(hourAngle);
    stroke(0,0,255);
    strokeWeight(10);
    line(0,0,50,0);
    pop();
    noFill();
    strokeWeight(10);

    stroke(255,0,0);
    arc(0,0,300,300,0,secondAngle);

    stroke(0,255,0);
    arc(0,0,280,280,0,minuteAngle);

    stroke(0,0,255);
    arc(0,0,260,260,0,hourAngle);

}