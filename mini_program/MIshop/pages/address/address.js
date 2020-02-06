Page({
  data:{
    // name:"",
    // phone:"",
    // address:"",
    // detail:""
     address:[],
     name:""
  },
  onLoad: function (e) {
    var address1 = e.address;
    console.log(address1);
    var address = JSON.stringify(address1)
    console.log(address);
    this.setData({
      address,
      // phone:address.phone,
      // address:address.address,
      // detail:address.detail
      // address:address,
    });
  }
})

