class ListNode:
  def _init_(self, val):
    self.val = val
    self.next = None
  def _repr_(self):
    if self:
      return "{}-{}".format(self.val, repr(self.next))

class Solution:
  def partition(self, head, x):
    dummySmaller,dummygreater = ListNode(-1), ListNode(-1)
    smaller, greater = dudummySmaller, dummygreater

    while head:
      if head.val < x
        smaller.next = head
        smaller = smaller.next
      else:
        greater.next = head
        greater = greater.next
      head = head.next
    smaller.next = dummygreater.next
    greater.next = None 

    return  dummySmaller.next

n1 = ListNode(1)
n2 = ListNode(4)
n3 = ListNode(3)
n4 = ListNode(2)
n5 = ListNode(4)
n6 = ListNode(2)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

print(n1)