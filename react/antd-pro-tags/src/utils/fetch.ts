
// interface + type
type HttpMethods = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE';
// any是 typescript 表示 什么类型都可以
// FuncType 定义了一个类型
type FuncType  = (url: string, method: HttpMethods) => Promise<any>//特别的函数,约定为函数 , return 一个promise

const fetchData: FuncType = (url: string, method: HttpMethods) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json)
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export {
  fetchData
}