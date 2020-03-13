function timeout(ms){
  return new Promise((resolve) => {
    setTimeout(resolve,ms)
  })
}

async function asyncPrint(value, ms){
  await timeout(ms);
  //await 必须等待timeout函数执行完才能进行下一步
  console.log(value);
}

// asyncPrint('hello', 2000)

function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    // 可以实现定时器操作
    await sleep(1000);
  }
}

one2FiveInAsync();