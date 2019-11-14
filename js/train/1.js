function f1(){
     var a=10;
     ndd=function(){
         a+=1;
     }
     function f2(){
         console.log(a);
     }
     return f2;
}
var a=f1();
a();
ndd();
a();