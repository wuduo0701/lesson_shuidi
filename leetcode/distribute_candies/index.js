/**
 * 
 * @param {Array length}} candies 
 * @return {number} count
 */
var distributeCandies = (candies) => {
    let count = 0;
    // 1.种类数,unique
    let obj = {};   //对象字面量        相当于哈希表
    // candies.forEach(item => {
    //     console.log(item);
    // });
    // return 0;
    for(let item of candies){
        // console.log(item);
        if (!obj[item]){
            obj[item] = 1;
            count++;
        }
    }
    const len = candies.length >> 1;
    // if(count > len){
    //     return len / 2;
    // } else {
    //     return count;
    // }
    return (count >= len) ? len : count;

};
console.log(distributeCandies([1,1,2,2,3,3]));