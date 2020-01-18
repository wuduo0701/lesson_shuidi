function ListNode(val){
  this.val = val;
  this.next = null;   //指向下一个节点
}

// 输入: 1->2->3->4->5->NULL
// 输出: 1->3->5->2->4->NULL

var oddEvenList = function(head) {
  // var cur = 0,per = 0;
  // const Len = head.length;
  var Oddnumber = dummyOdd = new ListNode(-1);
  var Evennumber = dummyEven = new ListNode(-1);
  var index = 1;
  while(head){
    if(index % 2 != 0){
      Oddnumber.next = head;  //进入奇数链表
      Oddnumber = Oddnumber.next;
    }else{
      Evennumber.next = head; //进入偶数链表
      Evennumber = Evennumber.next;
    }
    head = head.next;
    index ++;
  }
  Oddnumber.next = dummyEven.next;  //链接奇偶链表
  Evennumber.next = null;
  return dummyOdd.next;
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
console.log(oddEvenList(n1));