const showDetail=(e)=>{
  const id = e.currentTarget.dataset.pid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
Page({
  data: {
    slides:[
      {
        id:1,
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b652ea15897d769e799665946966d51d.jpg?w=1080&h=540&bg=FCECEF"
      },
      {
        id:2,
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/241dcd985a1c3f29902d092c7e7b91ea.jpg?w=1080&h=540&bg=DFFDFF"
      },
      {
        id:3,
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/309a3234970440345f8b63cf0ca442b3.jpg?w=1080&h=540&bg=CEEFFF"
      }
    ],
    phone_list:[
      {
        id:"7",
        name:"Redmi Note 8",
        detail:"6400万全场景四摄",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53e729d30746033a042d8ae9399553a7.jpg?w=516&h=420",
        price:"￥1199起"
      },
      {
        id:"6",
        name:"Redmi 8A",
        detail:"5000mAh超长续航",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/752cf7a42796fc30b22af1224b205dfd.jpg?w=516&h=420",
        price:"￥599起"
      },
      {
        id:"8",
        name:"小米CC9",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6aa2a59692332ed3aeb4c5c402e74532.png?w=516&h=420",
        detail:"3200万自拍，4800万三摄",
        price:"￥1499起"
      },
      {
        id:"9",
        name:"小米CC9e",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/224d9a0170f1b579eb60dc2143257a8a.jpg?w=516&h=420",
        detail:"3200万自拍，4800万三摄",
        price:"￥1099起"
      },
      {
        id:"10",
        name:"Redmi K20 Pro",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dc1255fd3e70b6cdd6409627ca59d3f7.jpg?w=516&h=420",
        detail:"骁龙855， 弹出全面屏",
        price:"￥2299起"
      },
      {
        id:"11",
        name:"Redmi 7A",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b71cb9173927fb0e9c82e1b443d7d1d3.jpg?w=516&h=420",
        detail:"小巧大电量 持久流畅",
        price:"￥539起"
      },
      {
        id:"12",
        name:"小米平板4",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e97f72b2cb359a16b22eadb05a86b346.jpg?w=516&h=420",
        detail:"大屏、长续航、超薄电脑",
        price:"￥1199起"
      },
      {
        id:"13",
        name:"小米CC9 美图版",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9dfc8cb973124fddf32067b76dfb3e8f.jpg?w=516&h=420",
        detail:"8GB+256GB，100%美图相机",
        price:"￥1999"
      }
    ]
  },
  showDetail,
})