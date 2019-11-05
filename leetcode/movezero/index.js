/**
 * 
 * @param {array} nums 
 */
   //  const movezero = [0,1,0,3,12];
   //  var movezeros = () => {
   //     const zero;
   //      for(var i = 0;i<movezero.length;i++)
   //      if(movezero[i] == 0){
   //          movezeros[i]=zero[i];
   //      }
        
   //  }
   // let moveZero; //undefined
   // moveZero = (nums) => {
   //   let notZeroArr = [],
   //     zeroArr = [];
     
   //   for (let i = 0; i < nums.length; i++) {
   //     if (nums[i] == 0) {
   //       zeroArr.push(0);
   //     } else {
   //       notZeroArr.push(nums[i]);
   //     }
   //   } 
   
   //   return notZeroArr.concat(zeroArr);
   // }
   // console.log(moveZero([0,1,0,3,12]));
   
   var moveZeroes = (nums) =>{
      var index = 0;
      for(var i = 0;i< nums.length;i++){
         if(nums[i] != 0){
            nums[index++] = nums[i];
            // index++;
         }
      }
      for(var i = index;i<nums.length;i++){
         nums[i] = 0;
         //nums[index++] = 0;
      }
      // return nums;
   }
   const nums = [0,1,0,3,12]; //Object
   moveZeroes(nums);   //内部时整了nums时，引用时赋值，则可以省略return nums
   console.log(nums);


