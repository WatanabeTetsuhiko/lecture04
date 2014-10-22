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
  var h="";
  var counterC=0;
  var counterD=0;

  while(counterC<q){
    h=h+" ";
    counterC=counterC+1;
  };

  while(counterD<q){
   var w=nSFC(counterD+1);
   var h=h.slice(1);
   counterD=counterD+1;
   console.log(h+w)
 };
}

centeringSFCPyramid(5)
