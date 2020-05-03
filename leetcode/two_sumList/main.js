/**
 * @author 朵雾
 * @param {list} l1 
 * @param {lixt} l2 
 */

var addTwoNumbers = function(l1, l2) {
    
    let result;
    let cache = [];
    let flag = 0; 
    while(l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag;
        if (sum > 9) {
            sum -= 10;
            flag = 1;
        } else {
            flag = 0;
        }  
        let list = new ListNode(sum);
        if (cache[0]) {
            cache[0].next = list;
            cache[0] = list;
        } else {
            cache[0] = result = list;
        }       
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    if (flag === 1) {
        cache[0].next = new ListNode(1);
    }
    return result; 
};
// var addTwoNumbers = function(l1, l2) {
    
// };