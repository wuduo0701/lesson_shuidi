const mongoose = require('mongoose')

// 数据存储（物理）是目的，
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  address: String,
  content: String,
  /**开始日期， 结束日期 */
  start: { type: Date, default: Date.now() },
  end: { type: Date, default: Date.now() },
  created_at: {
    type: Date, default: Date.now()
  },
  update_at: {
    type: Date, default: Date.now()
  }
})
//美团一年 2010团购 上线团购 6000行代码  10天 
const Todo = module.exports = mongoose.model('Todo', todoSchema)