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
  var h=a;
  return h;
};

var reduce=function(d,e){
  var d;
  var e;
  var a=d;
  var b=e;

  var h=gcd(a,b);

  var f=a/h;
  var g=b/h;
  var d=frac(f,g);
  console.log(d);
};

reduce(2,4)
