function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(head, x) {
    var smaller =  dummySmaller = new ListNode(-1);    //小区
    var greater = dummyGreater = new ListNode(-1);    //dummyGreater保留大区的头节点
    while(head){
      console.log(head.val);
      if(head.val < x) {
        smaller.next = head;    //进入较小值分区
        smaller = smaller.next;
      }else{
        greater.next = head;    //进入较大值分区
        greater = greater.next;
      }
      head = head.next;
    }
    smaller.next = dummyGreater.next;    //连接小区和大区，形成新链表
    greater.next = null;
    return dummySmaller.next;
};


const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n1);
console.log(partition(n1, 3));