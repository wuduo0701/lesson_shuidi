// 给定一个无序的整数数组，找到其中最长上升子序列的长度。
// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 

const arr = [10,9,2,5,3,7,101,18]
var lengthOfLIS = function(nums) {
  const len = nums.length;  //数组的的长度
  let dp = new Array(len).fill(1);  //dp数组全为1
  // dp[i]:表示以nums[i]为当前最长递增子序列尾元素的长度
  let max = 0;  //最长的子序列
  for(let i = 0; i < len; i++){
    for(let j = 0; j < i; j++){
      if(nums[i] > nums[j]){
        dp[i] = Math.max(dp[i],dp[j]+1);  
      }
    }
    max = Math.max(max,dp[i]);  //找出最大的长度
  }
  return max;
};

console.log(lengthOfLIS(arr))