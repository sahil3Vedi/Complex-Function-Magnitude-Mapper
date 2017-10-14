
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

var z;
var maxz=0;

//working

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  translate(windowWidth/2,windowHeight/2);
    //working

    rotate(PI/2);

    //if w=z
    if(mode==1){
      // for(i=-windowWidth/2;i<windowWidth/2;i=i+100){
      //   for(j=-windowWidth/2;j<windowWidth/2;j=j+100){
      //     z=new complex(i,j);
      //     if (z.mag()>maxz){
      //       maxz=z.mag();
      //     }
      //     let hue=Math.floor(map(z.mag(),0,maxz,0,255));
      //     stroke(hue,255-hue,0);
      //     point(i,j);
      //   }
      // }
      for(i=-windowWidth/2;i<windowWidth/2;i=i+10){
        for(j=-windowWidth/2;j<windowWidth/2;j=j+10){
          z=new complex(i,j);
          if (z.mag()>maxz){
            maxz=z.mag();
          }
          let hue=Math.floor(map(z.mag(),0,maxz,0,255));
          stroke(hue,255-hue,0);
          point(i,j);
        }
      }
    }
    //initially w=z









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
