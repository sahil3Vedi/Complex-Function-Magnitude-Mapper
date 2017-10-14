
//defiing complex numbers
function complex(x,y){
  this.re=x;
  this.im=y;

  this.add=function(z){
    let c=new complex(this.re+z.re,this.im+z.im);
    return c;
  }

  this.mult=function(z){
    let c=new complex(this.re*z.re-this.im*z.im,this.re*z.im+this.im*z.re);
    return c;
  }

  this.mag=function(){
    return Math.sqrt(this.re*this.re+this.im*this.im);
  }
}

var mode=0;
var i;
var j;

//working

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

    //if w=z
    if(mode==1){

    }
    //initially w=z
    //u=x,v=y
    //color tan function something continue here Sahil bbye :)










  //displaying frameRate
  stroke(255);
  noFill();
  rotate(-PI/2);
  text(Math.floor(frameRate()), 100, 100);
  //labelling graphs
  for(i=-windowWidth/2;i<windowWidth/2;i++){
    if(i%50==0){
      text(i,i,0);
    }
  }
  for(j=-windowWidth/2;j<windowWidth/2;j++){
    if(j%50==0){
      text(j,0,j);
    }
  }

}
