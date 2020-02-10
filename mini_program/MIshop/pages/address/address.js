Page({
  data:{
    name:["朵雾"],
    phone:["12345678900"],
    address:["江西省南昌市"],
    detail:["青山湖区东华理工大学"],
  },
  onLoad: function (option) {
    const that = this;
    var name = option.name;
    var phone = option.phone;
    var address = option.address;
    var detail = option.detail;
    if(name && phone && address && detail){
      var add_name = that.data.name;
      var add_phone = that.data.phone;
      var add_address = that.data.address;
      var add_detail = that.data.detail;
      add_name.push(name);
      add_phone.push(phone)
      add_address.push(address);
      add_detail.push(detail)
    }  
    this.setData({
      name:add_name,
      phone:add_phone,
      address:add_address,
      detail:add_detail
    });
  }
})

