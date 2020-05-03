/**
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode} 
 */
function ListNode(val){
  this.val = val;
  this.next = null;
}

// 给定这个链表：1->2->3->4->5
// 当 k = 2 时，应当返回: 2->1->4->3->5
// 当 k = 3 时，应当返回: 3->2->1->4->5


// var reverseKGroup = function(head, k) {
//     var dummy = pre = end = new ListNode(-1);
//     dummy.next = head;
//     while (end.next != null) {
//       for (let i = 0; i < k && end != null; i++) end = end.next;
//       if (end == null) break;
//       start = pre.next;
//       next = end.next;
//       end.next = null;
//       pre.next = reverse(start);
//       start.next = next;
//       pre = start;

//       end = pre;
//     }
//     return dummy.next
// };

// var reverse = function(head){
//   pre = null;
//   curr = head;
//   while (curr != null) {
//     next = curr.next;
//     curr.next = pre;
//     pre = curr;
//     curr = next;
// }
// return pre;
// }

var reverseKGroup = function(head, k) {
  let cur = head;
  let count = 0;
  // 求k个待反转元素的首节点和尾节点
  while(cur != null && count != k){
      cur = cur.next;
      count++;
  }
  // 足够k个节点，去反转
  if(count == k){
      // 递归链接后续k个反转的链表头节点
      cur = reverseKGroup(cur,k);
      while(count != 0){
          count--;
          // 反转链表
          let tmp = head.next;
          head.next = cur;
          cur = head;
          head = tmp;
      }
      head = cur;
  }
  return head;
};


const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(reverseKGroup(n1,2));