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

var randomSFCPyramid=function(c){
  var counterC=1;
  var c;
  var d=Math.random()*c;
  var e=Math.floor(d);
   while(counterC<=e){
   f=nSFC(counterC);
   counterC=counterC+1;
   console.log(f);
 }
};

randomSFCPyramid(100);
