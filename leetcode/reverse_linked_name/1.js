function ListNode(val){
  this.val = val;
  this.next = null; //指向下一个节点
}

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
var reverseList = function(head) {
  if(!head || !head.next) //链表为空或只有一个节点
    return head;
  let cur = head; //当前节点
  let pre = null; //前驱节点
  while(cur){
    let next = cur.next;
    cur.next = pre; //反转了链表
    pre = cur;  //前驱节点变为当前节点
    cur = next; //后继节点变成当前节点
  }
  return pre;
};
//形成链表
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
console.log(n1)