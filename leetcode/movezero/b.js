let obj = {
    name: '林佳豪',
    leetcode:90
}

const changleetcode = (o) => {
    o.leetcode = 100;
}
changleetcode(obj); //引用时赋值 o obj内存空间一致
console.log(obj);