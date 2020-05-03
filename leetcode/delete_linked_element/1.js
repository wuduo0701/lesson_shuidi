function ListNode(val){
  this.val = val;
  this.next = null;
}

// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

var removeElements = function(head, val) {
  const header = cur =  new ListNode(-1);
  header.next = head;
  // cur = header;
  while(cur.next != null){
    if(cur.next.val == val ){
        cur.next = cur.next.next;
    }else{
        cur = cur.next;
    }
}
return header.next;

};

//形成链表
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
console.log(removeElements(n1))