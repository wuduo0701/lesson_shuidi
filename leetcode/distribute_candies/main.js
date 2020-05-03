const distributeCandies = (candies) => {
    //去重 数据结构 有种结构 数组容器 不重复    
    const count = new Set(candies);
    
    return Math.min(count.size,candies.length >>1);      //数学对象，输出最小值   
}
distributeCandies([1,1,2,2,3,3]);