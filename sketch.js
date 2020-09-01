function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
  textSize(40);
textStyle("bold");
  background("black");
  fill("white");
  text("3",375,210);
  text("6",190,400);
  text("12",180,30);
  text("9",10,210);
  text("1",280,50)
  text("11",80,50);
  text("10",20,120);
  text("2",350,120);
  text("4",350,290);
  text("8",20,290);
text("5",280,370);
text("7",80,370);

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("red");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("chartreuse");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("chartreuse");
  line(0,0,50,0);
  pop();
  
  stroke("white");
  point (0,0);

  }