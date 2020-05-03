package main

import ("fmt")

// 矩形类	OO	GO
// 类型的声明
// 结构体
type Reactangle struct {		//constructor
	Length int
	Width int
}

//prototype 火车头	prototype	方法
// (r *Reactangle)声明以下Area函数属于Reactangel类
func (r *Reactangle) Area()  int {
	return r.Length * r.Width
}

func main()  {
	r := Reactangle{4, 2}		//go	面向对象
	fmt.Println(r.Area())
}