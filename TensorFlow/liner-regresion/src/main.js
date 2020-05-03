// 线性回归
// import './linear-regression/index'
// 归一化
// import './height-weight-归一化/index';
// 逻辑回归
// import './logic-regression/index'
// 多层神经网络 xor
// import './xor/index.js';



import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
// 1: 数据
const xs = [1, 2, 3, 4];  // input  [i1.png, i2.png, i3.png]
const yx = [1, 3, 5, 7];  // input  [y,       n,        y  ]
// 1 -> 8  4  1 // 告诉模型 错了 错的有多离谱
// 1
window.onload = async () => {
  tfvis.render.scatterplot(
    {
      name: '数据集',
    },
    {
      values: xs.map((x, i) => {
        return {
          x,
          y: yx[i]
        }
        // [{x: 1, y: 1}, {x: 2, y: 3}]
      })
    }
  )
  const model = tf.sequential();
  // 单层单个 神经元
  model.add(tf.layers.dense({
    units: 1,
    inputShape: 1
  }))
  // 损失函数 告诉错了 错得有多离谱
  // MSD 均方误差
  // optimizer: 优化器-》怎么调整，调整多少
  model.compile({
    loss: tf.losses.meanSquaredError,
    optimizer: tf.train.sgd(0.1)
  })
  // 数据转换一下
  const input = tf.tensor(xs), labels = tf.tensor(yx);
  // 学习
  // batchSize: 
  // epochs: 学习多少轮
  // 超参数：动态调整 不是死的
  await model.fit(input, labels, {
    batchSize: 4,
    epochs: 100,
    callbacks: tfvis.show.fitCallbacks(
      { name: '训练过程'}, 
      ['loss']   // loss
    )
  })
  const ouput = model.predict(tf.tensor([5]))
  console.log(ouput.dataSync());
}