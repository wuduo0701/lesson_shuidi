package main //包
// node_mail go email
import (
	"github.com/jordan-wright/email"
	"net/smtp"
	"log"
)

func main() { // 入口函数
	e := email.NewEmail() // := 定义并且附值
	e.From = "shunwuyu <754211506@qq.com>"
	// [] ? Array? 多个用户发邮件 { }集合
	// go 静态类型   js 弱类型被认为不安全 
	e.To = []string{"342435112@qq.com"}
	e.Subject = "你在家还好吗？" //标题
	// byte? go 类型 byte  字节流
	// e.Text = []byte("至从考试一别， 已有两月， 我长发已及腿，我想你也是")//内容
	// 链接  多行字符
	e.HTML = []byte(`
	<ul>
		<li><a href="https://juejin.im/post/5e575e02f265da573b0dad5f">百度</a></li>
		<li><a href="https://juejin.im/post/5e57048b6fb9a07cc845a9ef">天猫</a></li>
	</ul>
	`) 
	// 本地并没有搭建邮件服务器  由腾讯服务器转发
	e.AttachFile("26k.jpg") // 附件
	err := e.Send("smtp.qq.com:25", smtp.PlainAuth("", "754211506@qq.com", "wurzijtahyqebdie", "smtp.qq.com"))
	if  err != nil {
		// console.log()
		// console.error()
		//打印错误 Fatal
		log.Fatal(err)
	}
}