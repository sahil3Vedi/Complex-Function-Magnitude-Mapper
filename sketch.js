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

function scroller(bar,min,max,fac){
  this.min=min;
  this.max=max;
  this.x=bar.x+(bar.len*fac);
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

var ResolutionB;
var ResolutionS;
var MinXB;
var MinXS;
var MaxXB;
var MaxXS;
var MinYB;
var MinYS;
var MaxYB;
var MaxYS;

var res;
var minX;
var maxX;
var minY;
var maxY;



//working

function setup() {
  createCanvas(windowWidth,windowHeight);
  ResolutionB = new bar(1,10,-600,-300,100);
  ResolutionS = new scroller(ResolutionB,1,10,0.5);
  res=int(ResolutionS.value);
  MinXB = new bar(-windowHeight/2,windowHeight/2,-600,-250,100);
  MinXS = new scroller(MinXB,-windowHeight/2,windowHeight/2,0.25);
  minX=int(MinXS.value);
  MaxXB = new bar(-windowHeight/2,windowHeight/2,-600,-200,100);
  MaxXS = new scroller(MaxXB,-windowHeight/2,windowHeight/2,0.75);
  maxX=int(MaxXS.value);
  MinYB = new bar(-windowWidth/2,windowWidth/2,-600,-150,100);
  MinYS = new scroller(MinYB,-windowWidth/2,windowWidth/2,0.25);
  minY=int(MinYS.value);
  MaxYB = new bar(-windowWidth/2,windowWidth/2,-600,-100,100);
  MaxYS = new scroller(MaxYB,-windowWidth/2,windowWidth/2,0.75);
  maxY=int(MaxYS.value);
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
  } else if (key == 'S' || key == 's') {
    MinXS.x+=1;
    minX=int(MinXS.value);
  } else if (key == 'I' || key == 'i') {
    MaxXS.x-=1;
    maxX=int(MaxXS.value);
  } else if (key == 'K' || key == 'k') {
    MaxXS.x+=1;
    maxX=int(MaxXS.value);
  } else if (key == 'L' || key == 'l') {
    MinYS.x-=1;
    minY=int(MinYS.value);
  } else if (key == 'J' || key == 'j') {
    MinYS.x+=1;
    minY=int(MinYS.value);
  } else if (key == 'D' || key == 'd') {
    MaxYS.x-=1;
    maxY=int(MaxYS.value);
  } else if (key == 'A' || key == 'a') {
    MaxYS.x+=1;
    maxY=int(MaxYS.value);
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
      for(i=minX;i<maxX;i+=res){
        for(j=minY;j<maxY;j+=res){
          let z=new complex(i,j);
          let m=z.mag();
          if(m>maxz){
            maxz=m;
          }
          let hue=Math.floor(map(m,0,maxz,0,255));
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
  text('FrameRate: '+ Math.floor(frameRate()), 500, -270);
  text('type W-A-L-K to get started',500,-300);
  text('Q',-620,-285);
  text('E - Resolution',-490,-285);
  text('W',-620,-235);
  text('S - Ymax',-490,-235);
  text('I',-615,-185);
  text('K - Ymin',-490,-185);
  text('L',-620,-135);
  text('J - Xmax',-490,-135);
  text('D',-620,-85);
  text('A - Xmin',-490,-85);
  //labelling graphs50
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
  MaxXB.show();
  MaxXS.show();
  MinYB.show();
  MinYS.show();
  MaxYB.show();
  MaxYS.show();

}
