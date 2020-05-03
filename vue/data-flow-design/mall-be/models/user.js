const mongoose = require('mongoose');

// mongodb包容前期的设计冗余， 在移动时代，数据不规整，动态调整
const userSchema = new mongoose.Schema({
  "userId": String,
  "name": String,
  "avator": String,
  "username": String,
  "userPwd": String,
  "cartList": [
    {
      productId: String,
      productImg: String,
      productName: String,
      checked: String,
      productNum: Number,
      productPrice: Number,
    }
  ],
  "addressList": [
    {
      "addressId": Number,
      "userName": String,
      "streeName": String,
      "tel": Number,
      "isDefault": Boolean
    }
  ]
})
module.exports = mongoose.model('User',userSchema)