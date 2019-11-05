/**
 * @author 朵雾
 * @param {arr} nums 
 * @param {number} target 
 */
// var twoSum = function(nums, target) {        //双重循环算法  时间复杂度为O(n2)
//     let num;
//     for(var i = 0;i<nums.length;i++){
//         for(var j = i+1;j<nums.length;j++){
//             if((nums[i] + nums[j]) == target){
//                 num=[i,j];
//                 return num;
//             }
//         }
//     }
// }
        var twoSum = function(nums, target) {       //哈希表算法 时间复杂度为O(n)
            const map = {};
            const len = nums.length;
            for(let i=0;i<len; i++){
                const targetNum = target - nums[i];
                if(targetNum in map) 
                    return [map[targetNum], i];
                    // return map;
            map[nums[i]] = i;
         } 
}
const nums = [2,7,11,15],target = 9;
console.log(twoSum(nums,target));