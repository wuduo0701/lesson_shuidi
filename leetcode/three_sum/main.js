
var threeSum = function(nums) {
    const len = nums.length;
    let num =[];
    for(let i = 0;i<len-2;i++){
        for(let j = i+1 ;j<len-1;j++){
            for(let k = j+1;k<len;k++){
                if(nums[i] + nums[j] + nums[k] == 0 ){
                    num.push([nums[i],nums[j],nums[k]]);
                    
                }
            }
        }
    }
    return num;
}
// var threeSum = function(nums) {
//     const len = nums.length;
    // for(let ptr1 = 0;ptr1<len-2;ptr1++){
    //     for(let ptr2 = 1;ptr2<len;ptr2++){
    //         sum = nums[ptr1] + nums[ptr2];
    //         while(-sum != nums[ptr2]){

    //         }
    //     }
    // }
//     var  ptr1 = 0,ptr2 = 1,num;
//     for(let ptr2 = 1;ptr2<len;ptr2++){
//         while(nums[ptr2+1] == -(nums[ptr1+ptr2]) && ptr1 <= len-2){
//             ptr2++;
//             if(ptr2 == len){
//                 ptr1++;
//             }
//         }
//     }
// }
const nums=[-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));