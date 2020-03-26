//go tree
package	main

import ("fmt")

//树节点
type Node struct {
	value	int		//值
	left	*Node	//左节点
	right	*Node	//右节点
}

//创建树
func CreateNode(value int) *Node {
	return &Node{value, nil, nil}	//nil为空	& 取地址
}

//寻找节点	时间复杂度	链表O(N) -> 树状O(logN)	递归
func (node *Node) FindNode(n *Node, x int)  *Node{
	// 在一棵树找节点	每三个节点里
	if n == nil{
		return nil
	}else if n.value == x {
		return n
	}else{
		p := node.FindNode(n.left, x)	//递归	沿着左子树
		if p != nil{	//找到值了
			return p
		}
		return node.FindNode(n.right, x)	//沿着右子树
	}

}
// 找到树的最大高度
func (node *Node) GetTreeHeight(n *Node)  int{
	if n == nil{
		return 0
	}else{
		// 当前节点的高度？Math.max(左子树的高度+1	右子树的高度+1)
		lHeight := node.GetTreeHeight(n.left)
		rHeight := node.GetTreeHeight(n.right)
		if (lHeight > rHeight){
			return lHeight+1;
		}else{
			return rHeight+1;
		}
	}
}
//寻找叶子节点
func (node *Node)GetLeafNode(n *Node){
	if n != nil{
		if n.left == nil && n.right == nil{
			fmt.Printf("%d", n.value)
		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.right)
	}
}
//前序遍历
func (node *Node)FrontNode(n *Node) {
	if n != nil{

		fmt.Printf("%d",n.value)
		node.FrontNode(n.left)
		node.FrontNode(n.right)
	}
}
//中序遍历
func (node *Node)CenterNode(n *Node) {
	if n != nil{
		node.CenterNode(n.left)
		fmt.Printf("%d",n.value)
		node.CenterNode(n.right)
	}
}
//后序遍历
func (node *Node)BackNode(n *Node) {
	if n != nil{
		node.BackNode(n.left)
		node.BackNode(n.right)
		fmt.Printf("%d",n.value)
	}
}

// tree	treeNode	递归的概念来定义的

func main()  {
	root := CreateNode(5)	//根节点
	root.left = CreateNode(2)		//CreateNode	生成的节点可以作为其他节点的左子树
	root.right = CreateNode(4)
	root.left.right = CreateNode(7)
	root.left.right.left = CreateNode(6)
	root.right.left = CreateNode(8)
	root.right.right = CreateNode(9)

	fmt.Printf("%d\n", root.FindNode(root, 4).value)
	fmt.Printf("%d\n", root.GetTreeHeight(root))
	// root.GetLeafNode(root)
	fmt.Printf("前序遍历：\n")
	root.FrontNode(root)
	fmt.Printf("\n")
	fmt.Printf("中序遍历：\n")
	root.CenterNode(root)
	fmt.Printf("\n")
	fmt.Printf("后序遍历：\n")
	root.BackNode(root)
}