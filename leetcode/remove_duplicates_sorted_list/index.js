var removeDuplicates = function(nums) {
    var cur = 0,per = 0;
    const len = nums.length;
    while(cur < len){
      if(nums[cur] == nums[per]){
        cur++;
      }
      else{
        per++;
        // nums[per] = nums[cur];
        cur++;
      }
      // return per;
      
    }
    return per+1;
};
console.log(removeDuplicates([1,1,2,3]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));