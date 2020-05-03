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
        id:"1",
        url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfb78492bc42eff29048267e4269f64a.jpg?w=1080&h=540&bg=E1204C"
      }
    ],
    tv_list:[
      {
        id:"10",
        name:"小米电视5",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12732acf0fafcbd433391ed4fc4ec10.jpg?w=505&h=505&thumb=1",
        detail:"全面屏设计，人工智能语音",
        price:"￥2799"
      },
      {
        id:"11",
        name:"小米电视4A",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03948eff625ea56d2a79fd3931b02c29.jpg?w=505&h=505&thumb=1",
        detail:"4K HDR，人工智能语音",
        price:"￥2799"
      },
      {
        id:"20",
        name:"小米盒子4",
        img:"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3bc043f7e463ab0a9629569121639cde.jpg?w=505&h=505&thumb=1",
        detail:"人工智能语音机顶盒，海量片源",
        price:"￥299"
      },
      {
        id:"12",
        name:"小米电视4C 50英寸",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98f3656a5fd6882e24a9b1c8fe024728.jpg?w=505&h=505&thumb=1",
        detail:"4K HDR，人工智能语音",
        price:"￥1499"
      },
      {
        id:"13",
        name:"小米电视4C 32英寸",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7ac519c6c2fdf7cd3dbcea510c0d4faf.jpg?w=505&h=505&thumb=1",
        detail:"高清液晶屏，人工智能系统",
        price:"￥799"
      },
      {
        id:"14",
        name:"小米电视4C 40英寸",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c868c8e2aa1d0055c7d281b44302bea.jpg?w=505&h=505&thumb=1",
        detail:"FHD全高清屏，钢琴烤漆",
        price:"￥1099"
      },
      {
        id:"16",
        name:"小米电视4S 75英寸",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bb590f08bd68f2397371986e0ebc1e7e.jpg?w=505&h=505&thumb=1",
        detail:"人工智能语音，金属机身",
        price:"￥4699"
      },
      {
        id:"17",
        name:"全面屏电视E55C",
        img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bdbdfbb63ae26e4dfb1009e9988afdd5.jpg?w=505&h=505&thumb=1",
        detail:"全面屏设计，人工智能语音",
        price:"￥1899"
      }
    ]
  },
  showDetail,
})