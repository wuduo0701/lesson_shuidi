// var text = 'abcabc';     //split将字符串转化为数组
// t1 = text.split('');
// console.log(t1);
/**
 * @author 朵雾
 * @param {string} s 
 * @param {num} max     max循环完毕无重复最长字串长度
 * @param {num} max     循环中最长的字符串长度
 * @param {string} str  
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0,num = 0;    
    let str = '';
    for(let a of s){
        if(str.indexOf(a) == -1){       //indexOf返回某个指定的字符串在另一个字符串出现的位置，如果为查询到，则显示为-1
                                        //其中返回的下标值是从0开始计算的，在后面用的slice要记得+1。
            // str = str + a;
            str += a;
            num++;
            //num = str.length;
            if(max < num){
                max = num;
            }
            
           // max = max < num ? num: max;   //三元运算符
        }else{
            str += a;
            str = str.slice(str.indexOf(a)+1);  //slice表示从已有数组提取指定子数组，接受两个参数slice(start,end)，不会改变原数组。
                                                //其中start为起始位置，end为末尾位置。start为必选，end为可选(没有end表示到数组的末尾)
                                                //要与indexOf区分好，这个位置是从1开始计算的，与数组从0开始不一样，要记得+1
            num = str.length;
        }
    }
    return max;
};


console.log(lengthOfLongestSubstring('pwwke'));
console.log(lengthOfLongestSubstring('abcabc'));
console.log(lengthOfLongestSubstring('bbbb'));