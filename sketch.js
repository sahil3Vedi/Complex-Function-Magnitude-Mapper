//declaring functional variables
//z=x+iy
//w=f(z)
/*
contuor plotting
for |w|=(k1,k2,k3......);
*/

var x;
var y;
var u;
var v;
var modw;


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //setting up
  stroke(255);
  translate(windowWidth/2,windowHeight/2);
  background(0);
  line(-windowWidth/2,0,windowWidth/2,0);
  line(0,-windowHeight/2,0,windowHeight/2);

    //working

    rotate(PI/2);
    stroke(200,250,100);
    //initially w=z
    //u=x,v=y
    //color tan function something continue here Sahil bbye :)
    modw=sqrt(pow(x,2)+pow(y,2));










  //displaying frameRate
  stroke(255);
  noFill();
  rotate(-PI/2);
  text(Math.floor(frameRate()), 100, 100);
  //labelling graphs
  for(var i=-windowWidth/2;i<windowWidth/2;i++){
    if(i%50==0){
      text(i,i,0);
    }
  }
  for(var j=-windowWidth/2;j<windowWidth/2;j++){
    if(j%50==0){
      point(j,0);
    }
  }

}
