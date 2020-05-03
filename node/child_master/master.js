//主线程
const cp = require('child_process'); //创建子进程
const child_process = cp.fork(__dirname + '/child.js');  //fork在挂起一个进程(启动子进程)
// 公司 天下没有难做的生意
// 18人， 员工
child_process.send('hah');      //有些任务交给他
child_process.on('message', (str) => {
    console.log('parent', str)
})
