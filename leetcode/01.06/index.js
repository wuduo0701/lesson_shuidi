var s1 = "aabcccccaaa",
    s2 = "abbccd";
var compressString = function(S) {
  const len = S.length; 
  let count = 1, change = S[0]; 
  let s = "";
  for(let i = 1;i< len; ++i){ 
    if(change == S[i]){
      count++;
    }else{
      s = s + change + count;
      change = S[i];
      count = 1;
    }
  }
  s = s + change + count;
  return s.length >= len ? S : s;
}

console.log(compressString(s2))