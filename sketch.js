//defining scrollers
function bar(min,max,x,y,len){
  this.x=x;
  this.y=y;
  this.len=len;
  this.min=min;
  this.max=max;
  this.show=function(){
    rect(x,y,len,20);
  }
}

function scroller(bar,min,max){
  this.min=min;
  this.max=max;
  this.x=bar.x+(bar.len/2);
  this.y=bar.y;
  this.value=5;
  this.show=function(){
    this.x=constrain(this.x,bar.x,bar.x+bar.len);
    line(this.x,this.y,this.x,this.y+20);
    this.value=Math.floor(map(this.x,bar.x,bar.x+bar.len,this.min,this.max));
  }
}


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

var mode=1;
var i;
var j;
var maxz=0;

var ResolutionB;
var ResolutionS;

var res;
var minX;



//working

function setup() {
  createCanvas(windowWidth,windowHeight);
  ResolutionB = new bar(1,10,-600,-300,100);
  ResolutionS = new scroller(ResolutionB,1,10);
  res=int(ResolutionS.value);
  MinXB = new bar(-windowWidth/2,windowWidth/2,-600,-250,100);
  MinXS = new scroller(MinXB,-windowWidth/2,windowWidth/2);
  minX=int(MinXS.value);
}

function keyPressed() {
  if (key == 'E' || key == 'e') {
    ResolutionS.x+=2;
    res=int(ResolutionS.value);
  } else if (key == 'Q' || key == 'q') {
    ResolutionS.x-=2;
    res=int(ResolutionS.value);
  } else if (key == 'W' || key == 'w') {
    MinXS.x-=1;
    minX=int(MinXS.value);
  } else if (key == 'S' || key == 'S') {
    MinXS.x+=1;
    minX=int(MinXS.value);
  }
  return false; // prevent default
}


function draw(){
  background(0);
  translate(windowWidth/2,windowHeight/2);
    //working

    rotate(PI/2);

    //if w=z
    if(mode==1){
      let maxz=0;
      for(i=minX;i<21;i+=res){
        for(j=-20;j<21;j+=res){
          let z=new complex(i,j);
          maxz=(new complex(20,20)).mag()
          let hue=Math.floor(map(z.mag(),0,maxz,0,255));
          stroke(255-hue,hue,0);
          point(i,j);
        }
      }
    }

    //if w=z*z-2z+1
    if(mode==2){
      for(i=-50;i<50;i=i+1){
        for(j=-50;j<50;j=j+1){
          let k=new complex(i,j);
          let p=new complex(40,0);
          let q=k.mult(p);
          let z=k.add(q);
          if (z.mag()>maxz){
            maxz=z.mag();
          }
          let hue=Math.floor(map(z.mag(),0,maxz,0,255));
          stroke(255-hue,hue,0);
          point(i,j);
        }
      }
    }








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
  ResolutionB.show();
  ResolutionS.show();
  MinXB.show();
  MinXS.show();

}
