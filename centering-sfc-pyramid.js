var nSFC=function(b){
　var a="";
  var b;
  var counterB=0;

  while(counterB<b) {
    a =a + "SFC ";
    counterB=counterB+1;
  };

 return a;
}

var centeringSFCPyramid=function(q){
  var q;
  var t=2*q;
  var h="";
  var counterC=0;
  var counterD=0;

  while(counterC<t){
    h=h+" ";
    counterC=counterC+1;
  };

  while(counterD<q){
   var w=nSFC(counterD+1);
   var h=h.slice(2);
   counterD=counterD+1;
   console.log(h+w)
 };
}

centeringSFCPyramid(5)
