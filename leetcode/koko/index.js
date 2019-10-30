const piles=[3,6,7,11] //香蕉
// console.log(piles.length);
// console.log(piles[0]);
/**
 * @author 朵雾
 * @param {number[]} piles  香蕉数组
 * @param {number} H    最大时间
 * @param {number} mid  吃的速度
 * @return {boolean}
 * function 判断是否可吃完
 */
function canEatAllBananas(piles,H,mid){
    let h=0; //吃完要花的时间
    for(let j=0;j<piles.length;j++){
        h=h+Math.ceil(piles[j] / mid);
    }
    return h<=H;
}
/**
 * 
 * @param {number[]} piles 香蕉数组
 * @param {number} H    最大时间
 * @param {number} lo   最小值
 * @param {number} li   最大值
 */
function minEatingSpeed(piles,H){
    //一个个试
    let lo=1;//最小值
    let hi =Math.max(...piles);//最大值
    //得到数组中的最大值，吃法的约束
    // for(let i=0;i<piles.length;i++){
    //     if(piles[i] > lo){
    //         hi = piles[i];
    //     }
    // }
    //lo -> hi去试，最小大的能吃完的是不是这个值？
    // for(let i=lo;i<=hi;i++){
    //     if(canEatAllBananas(piles,H,i)){
    //         return i;
    //     }
    // }
    while(lo<=hi){
        // 二分法
        // 位移运算
        let mid=lo+((hi-lo) >> 1);
        if (canEatAllBananas(piles,H,mid)){
            hi=mid-1;
        }else {
            lo=mid+1;
        }
    }
    // console.log(hi,'-----');
     return lo;
}

console.log(minEatingSpeed(piles,8));