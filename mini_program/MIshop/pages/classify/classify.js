Page({
  data:{
    currentTab:0,   //目前按钮所在的id
    navScrollLeft: 0,
    // 左边滑块的内容
    navData:[
      {
        id: 1,
        name: "新品"
      },
      {
        id: 2,
        name: "众筹"
      },
      {
        id: 3,
        name: "小米手机"
      },
      {
        id: 4,
        name: "Redmi手机"
      },
      {
        id: 5,
        name: "黑鲨游戏手机"
      },
      {
        id: 6,
        name: "电视"
      },
      {
        id: 7,
        name: "大家电"
      },
      {
        id: 8,
        name: "电脑办公"
      },
      {
        id: 9,
        name: "小爱智能"
      },
      {
        id: 10,
        name: "小爱智能"
      },
      {
        id: 11,
        name: "路由器"
      },
      {
        id: 12,
        name: "生活家电"
      },
      {
        id: 13,
        name: "厨房电器"
      },{
        id: 14,
        name: "智能穿戴"
      },{
        id: 15,
        name: "智能家居"
      },{
        id: 16,
        name: "车载出行"
      },{
        id: 17,
        name: "个护健康"
      },{
        id: 18,
        name: "数码配件"
      },{
        id: 19,
        name: "日常用货"
      },{
        id: 20,
        name: "有品精选"
      },{
        id: 21,
        name: "服务"
      },
    ],
    // 右边所有商品的内容
    item:[
      //手机部分数据
      {
        id: "phone",
        name:  "手机",
        cate_list:[
          {
            name: "Redme K30 4G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/Redme%20K30%20%204G.png"
          },
          {
            name: "Redme K30 5G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/Redme%20K30%205G.png"
          },
          {
            name: "小米CC9 Pro",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/%E5%B0%8F%E7%B1%B3CC9%20Pro.png"
          },
          {
            name: "小米CC9 Pro 5G",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/%E5%B0%8F%E7%B1%B39%20Pro%205G.png"
          },
          {
            name: "Redmi 8",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/Redme%208.png"
          },
          {
            name: "Redmi 8A",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/phone1/Redme%208A.png"
          }
        ],
      },
      // 家电部分数据
      {

      },
      //电脑部分数据
      {
        
      }
      
    ]
  },
  switchNav(e){   
    const cur = e.currentTarget.dataset.current;
    this.setData({
      currentTab: cur
    })
  }
})