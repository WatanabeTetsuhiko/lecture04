var frac=function(bunnsi,bunnbo){
  var bunnsuu={
    bunnsi:bunnsi,
    bunnbo:bunnbo
  };
  return bunnsuu;
};


var gcd=function(a,b){
  while(b>0){
    c=a%b;
    a=b;
    b=c;
  };
  var g=a;
  return g;
};

var reduce=function(a,b){
  var c;

  if(b==1){
    return a;
  }

 gcd(a,b);

  var e=a/g;
  var f=b/g;
  var d=frac(e,f);
  console.log(d);
};

reduce(2,4)
