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

// 使用一层循环，每遍历到一个元素就计算该元素与 target之间的差值 dif，
// 然后以 dif为下标到数组temp中寻找，如果 temp[dif] 有值(即不是 undefined)，
// 则返回两个元素在数组 nums 的下标，如果没有找到，则将当前元素存入数组 temp
//  中(下标: nums[i],Value:inums[i], Value: inums[i],Value:i) 

    // var twoSum = function(nums, target) {        //java里的哈希表算法就是js里的数组
    //     var temp = [];
    //     for(var i=0;i<nums.length;i++){
    //         var dif = target - nums[i];
    //         if(temp[dif] != undefined){
    //             return [temp[dif],i];
    //         }
    //         temp[nums[i]] = i;
    //     }
    // };

        var twoSum = (nums, target) =>{       //哈希表算法 时间复杂度为O(n)
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