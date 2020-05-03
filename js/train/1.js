function f1(){
     var a=10;
     ndd=function(){
         a+=1;
     }
     function f2(){
         console.log(a);
     }
     function f3() {
        a+=2;
     }
     return f2;
}
 var a=f1();
// a();
f3();
a();