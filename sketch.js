//defining sliders
var resolutionSlider;
var xmaxSlider;
var xminSlider;
var ymaxSlider;
var yminSlider;

var aSlider;
var bSlider;
var cSlider;

var tSlider;

//defining canvas;
var complexCanvas;


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


var i;
var j;

var res;
var minX;
var maxX;
var minY;
var maxY;
var minXX;
var maxXX;
var minYY;
var maxYY;



//working

function setup() {
  complexCanvas=createCanvas(windowWidth,windowHeight);
  complexCanvas.style('top','auto');
  complexCanvas.style('z-index','-1000');
  complexCanvas.style('position','fixed');
  complexCanvas.style('bottom','0px');
  resolutionSlider = createSlider(1,10,50);
  xmaxSlider = createSlider(-windowWidth/4,windowWidth/4,50);
  xminSlider = createSlider(-windowWidth/4,windowWidth/4,50);
  ymaxSlider = createSlider(-windowWidth/4,windowWidth/4,50);
  yminSlider = createSlider(-windowWidth/4,windowWidth/4,50);
  aSlider = createSlider(-10,10,50);
  bSlider = createSlider(-10,10,50);
  cSlider = createSlider(-10,10,50);
  tSlider = createSlider(0,1,50);
  resolutionSlider.position(50,20);
  xmaxSlider.position(50,70);
  xminSlider.position(50,120);
  ymaxSlider.position(50,170);
  yminSlider.position(50,220);
  aSlider.position(windowWidth-200,70);
  bSlider.position(windowWidth-200,120);
  cSlider.position(windowWidth-200,170);
  tSlider.position(windowWidth-200,220);

}

function draw(){
  background(0);
  res=resolutionSlider.value();
  minX=xminSlider.value()-windowWidth/4;
  maxX=xmaxSlider.value()-windowWidth/4;
  minY=yminSlider.value();
  maxY=ymaxSlider.value();
  minXX=xminSlider.value()+windowWidth/4;
  maxXX=xmaxSlider.value()+windowWidth/4;
  minYY=yminSlider.value();
  maxYY=ymaxSlider.value();
  translate(windowWidth/2,windowHeight/2);
    //working

    //rotate(PI/2);

    //w=z
    if(tSlider.value()!=0){
      let maxz=0;
      for(i=minX;i<maxX;i+=res){
        for(j=minY;j<maxY;j+=res){
          let z=new complex(i+windowWidth/4,j);
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

    //w=f(z)
    let maxzz=0;
    for(i=minXX;i<maxXX;i+=res){
      for(j=minYY;j<maxYY;j+=res){
        let z=new complex(i-windowWidth/4,j);
        let a=new complex(aSlider.value()/100,0);
        let b=new complex(bSlider.value(),0);
        let c=new complex(cSlider.value(),0);
        let zsq=z.mult(z);
        let z1=a.mult(zsq);
        let z2=b.mult(z);
        let z3=z1.add(z2);
        let z4=z3.add(c);
        let m=z4.mag();
        if(m>maxzz){
          maxzz=m;
        }
        let hue=Math.floor(map(m,0,maxzz,0,255));
        stroke(255-hue,hue,0);
        point(i,j);
      }
    }

  //displaying frameRate
  stroke(255);
  noFill();
  text('FrameRate: '+ Math.floor(frameRate()), 500, 270);
  text((aSlider.value()/100)+'z*z+'+bSlider.value()+'z+'+cSlider.value(), 500, -280);
  text("Coeff z*z", 426, -246);
  text("Coeff z", 436, -196);
  text("Constant", 426, -146);
  text("Toggle w = z", 410, -96);
  text("Spacing", -497, -296);
  text("max X", -497, -246);
  text("min X", -497, -196);
  text("max Y", -497, -146);
  text("min Y", -497, -96);
  //labelling graphs50
  var t = Math.floor(windowWidth/2);
  for(i=-t;i<0;i++){
    if(Math.floor(i+windowWidth/4)%50==0){
      text(Math.floor(i+windowWidth/4),i,0);
    }
  }
  for(i=0;i<t;i++){
    if(Math.floor(i-windowWidth/4)%50==0){
      text(Math.floor(i-windowWidth/4),i,0);
    }
  }
  for(j=windowHeight/2;j>-windowHeight/2;j-=1){
    if(j%50==0){
      text(-j + " j",0,j);
    }
  }
  line(0,-windowHeight/2,0,windowHeight/2);
  line(-windowWidth/4,-windowHeight/2,-windowWidth/4,windowHeight/2);
  line(windowWidth/4,-windowHeight/2,windowWidth/4,windowHeight/2);
  line(-windowWidth/2,0,windowWidth/2,0);

}
