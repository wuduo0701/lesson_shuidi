// 给定一个大小为 n 的数组，找到其中的多数元素。
// 多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

// 输入: [3,2,3]
// 输出: 3

// 输入: [2,2,1,1,1,2,2]
// 输出: 2


//选举算法
var array1 = [3,2,3];
var array2 = [2,2,1,1,1,2,2];
var array3 = [1,1,1,3,3];
var array4 = [6,5,5]
// let i = 0;
// var majorityElement = function(nums) {
//   // majorityElement()
//   nums.sort();
//   let length = nums.length;
//   return nums[length/2+1]
// };
// nums = array1.sort();
// let length = nums.length;

// console.log(length%2)

var majorityElement = function(nums) {
  let count = 1;  //次数的计算
  majority = nums[0];
  for(let i = 1; i<nums.length; i++){
    //投票选举题  投票算法
    // 更换选举人，票数不够了，变为少数派了，更换成多数派
    if(count == 0){
      majority = nums[i]
    }
    // 和自己一样就加一，否则就减一
    if(nums[i] === majority){
      count++;
    }else{
      count--;
    }
  }
  return majority
}
console.log(majorityElement([6,5,5]))