var nSFC=function(b){
  var a = "";
  var b;
  var counter=0;

  while(counter<b) {
    a = a + "SFC ";
    counter=counter+1;
  };
  return a;
};

var sfcPyramid=function(d){
  var counterB=1;
  var c;
  while(counterB<=d){
    c=nSFC(counterB);
    counterB=counterB+1;
    console.log(c);
  }
};

sfcPyramid(5);
