function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  blendMode(DIFFERENCE);

  var hw=windowWidth*.5;
  var hh=windowHeight*.5;
   //text
  push();
  textSize(180);
  fill(255);
  text("ok",hw-10,hh);
  pop();

  push();
  fill(255);
  ellipse(hw,hh,150,150);
  pop();

  push();
  fill(255);
  rect(hw-75,hh-75,150,150);
  pop();

  push();
  fill(255);
  ellipse(hw,hh,212,212);
  pop();

  push();
  fill(255);
  rect(hw-150,hh-150,300,300);
  pop();

push();
  fill(255);
  rect(hw-106,hh-106,212,212);
  pop();
  
  push();
  fill(255);
  ellipse(hw,hh,300,300);
  pop();

   push();

  fill(255);
  rect(hw-300,hh-300,600,600);
  pop();
  
  push();
  fill(255);
  ellipse(hw,hh,425,425);
  pop();

 
   
}

function draw() {




 

 
}

function windowResized(){
  setup();
}
