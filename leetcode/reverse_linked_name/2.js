function ListNode(val){
  this.val = val;
  this.next = null; //指向下一个节点
}

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
var reverseList = function(head) {
  if(!head || !head.next){
    return head;
  }else {
    let newHead = reverseList(head.next)  //递归
    head.next.next = head;  //反过来
    head.next = null
    return newHead;
  }
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
console.log(reverseList(n1))