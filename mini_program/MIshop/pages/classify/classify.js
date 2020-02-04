const showcDetail=(e)=>{
  const id = e.currentTarget.dataset.cid;
  console.log(id);
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
Page({
  data:{
    currentTab:0,   //目前按钮所在的id
    navScrollLeft: 0,
    scrollTop:0,
    // 左边滑块的内容
    navData:[
      {
        id: "new",
        name: "新品"
      },
      {
        id: "zhong",
        name: "众筹"
      },
      {
        id: "mi",
        name: "小米手机"
      },
      {
        id: "redmi",
        name: "Redmi手机"
      },
      {
        id: "heisha",
        name: "黑鲨游戏手机"
      },
      {
        id: "tv",
        name: "电视"
      },
      {
        id: "big_jd",
        name: "大家电"
      },
      {
        id: "com_office",
        name: "电脑办公"
      },
      {
        id: "AI",
        name: "小爱智能"
      },
      {
        id: "router",
        name: "路由器"
      },
      {
        id: "ele_life",
        name: "生活家电"
      },
      {
        id: "ele_kitchen",
        name: "厨房电器"
      },{
        id: "AI_dress",
        name: "智能穿戴"
      },{
        id: "Vehicle",
        name: "车载出行"
      },{
        id: "per_health",
        name: "个护健康"
      },{
        id: "Dig_parts",
        name: "数码配件"
      },{
        id: "day_use",
        name: "日常用货"
      }
      // ,{
      //   id: 18,
      //   name: "有品精选"
      // },{
      //   id: 19,
      //   name: "服务"
      // },
    ],
    // 右边所有商品的内容
    item:[
      //手机部分数据
      {
        id: "xing",
        name:  "手机",
        cate_list:[
          {
            id:"1",
            name: "Redmi K30 4G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20K30%204G.jpg"
          },
          {
            name: "Redmi K30 5G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20K30%205G.jpg"
          },
          {
            name: "小米CC9 Pro",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9%20Pro.png"
          },
          {
            name: "小米CC9 Pro 5G",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9%20Pro%205G.png"
          },
          {
            name: "Redmi 8",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%208.png"
          },
          {
            name: "Redmi 8A",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%208A.png"
          },
          {
            name: "Redmi Note 8",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20Note8.png"
          },
          {
            name: "小米CC9",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9.png"
          },
          {
            name: "小米CC9e",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC%209e.png"
          }
        ],
      },
      // 家电部分数据
      {
        // id: "2",
        name: "家电",
        cate_list:[
          {
            name: "小米电视5",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/ele_appliance/%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%865%2055%E8%8B%B1%E5%AF%B8.png"
          },
          {
            name: "壁画电视",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/ele_appliance/%E5%B0%8F%E7%B1%B3%E5%A3%81%E7%94%BB%E7%94%B5%E8%A7%86%2065%E8%8B%B1%E5%AF%B8.jpg",
          },
          {
            name: "电视Pro",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/ele_appliance/%E7%94%B5%E8%A7%86Pro%2055%E8%8B%B1%E5%AF%B8.jpg"
          }
        ]
      },
      //电脑部分数据
      {
        // id: "3",
        name: "电脑",
        cate_list:[
          {
            name:"RedmiBook14",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/RedmiBook14.png"
          },
          {
            name:"RedmiBook13",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/RedmiBook13.jpg"
          },
          {
            name: "小米笔记本",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC.png"
          }
        ]
      },
      // 众筹好物部分
      {
        id: "zhong",
        name: "众筹好物",
        cate_list:[
          {
            name: "电饭煲",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/funding/%E7%94%B5%E9%A5%AD%E7%85%B2.jpg"
          },
          {
            name: "洗手机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/funding/%E6%B4%97%E6%89%8B%E6%9C%BA.jpg"
          },
          {
            name: "毛球修剪器",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/funding/%E4%BF%AE%E5%89%AA%E5%99%A8.jpg"
          }
        ]
      },
      //小米系列
      {
        id: "mi",
        name: "小米系列",
        cate_list:[
          {
            name: "小米CC9",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9.png"
          },
          {
            name: "小米CC9e",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC%209e.png"
          },
          {
            name: "小米CC9 Pro",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9%20Pro.png"
          },
          {
            name: "小米CC9 Pro 5G",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/%E5%B0%8F%E7%B1%B3CC9%20Pro%205G.png"
          },
        ]
      },
      // Redmi系列
      {
        id: "redmi",
        name: "Redmi",
        cate_list:[
          {
            name: "Redmi K30 4G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20K30%204G.jpg"
          },
          {
            name: "Redmi K30 5G",
            img:  "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20K30%205G.jpg"
          },
          {
            name: "Redmi 8",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%208.png"
          },
          {
            name: "Redmi 8A",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%208A.png"
          },
          {
            name: "Redmi Note8",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/phone/Redmi%20Note8.png"
          },
        ]
      },
      //黑鲨游戏手机
      {
        id: "heisha",
        name: "黑鲨系列",
        cate_list:[
          {
            name: "黑鲨游戏手机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E9%BB%91%E9%B2%A8%E6%89%8B%E6%9C%BA/%E9%BB%91%E9%B2%A8%E6%89%8B%E6%9C%BA.png"
          }
        ]
      },
      //电视系列
      {
        id: "tv",
        name: "电视",
        cate_list: [
          {
            name: "小米壁画电视",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%B5%E8%A7%86/%E5%B0%8F%E7%B1%B3%E5%A3%81%E7%94%BB%E7%94%B5%E8%A7%86%2065%E8%8B%B1%E5%AF%B8.jpg"
          },
          {
            name: "小米电视4A",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%B5%E8%A7%86/%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%864A.png"
          },
          {
            name: "小米电视4C",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%B5%E8%A7%86/%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%864C.png"
          },
          {
            name: "小米电视5",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%B5%E8%A7%86/%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%865%2055%E8%8B%B1%E5%AF%B8.png"
          },
        ]
      },
      //盒子
      {
        // id: "7",
        name: "盒子",
        cate_list:[
          {
            name: "盒子4",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/Cate/box/%E7%9B%92%E5%AD%904.png",
          },
          {
            name: "盒子4c",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/Cate/box/%E7%9B%92%E5%AD%904c.png",
          },
          {
            name: "盒子4 SE",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/Cate/box/%E7%9B%92%E5%AD%904%20SE.png"
          }
        ]
      },
      //大家电
      {
        id: "big_jd",
        name: "大家电",
        cate_list:[
          {
            name: "冰箱",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%A4%A7%E5%AE%B6%E7%94%B5/%E5%86%B0%E7%AE%B1.jpg"
          },
          {
            name: "立式空调",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%A4%A7%E5%AE%B6%E7%94%B5/%E7%AB%8B%E5%BC%8F%E7%A9%BA%E8%B0%83.png"
          },
          {
            name: "滚筒洗衣机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%A4%A7%E5%AE%B6%E7%94%B5/%E6%BB%9A%E7%AD%92%E6%B4%97%E8%A1%A3%E6%9C%BA.png"
          }
        ]
      },
      //电脑部分数据
      {
        id: "com_office",
        name: "电脑",
        cate_list:[
          {
            name:"RedmiBook14",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/RedmiBook14.png"
          },
          {
            name:"RedmiBook13",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/RedmiBook13.jpg"
          },
          {
            name: "小米笔记本",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC.png"
          },
          {
            name: "游戏本",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/%E6%B8%B8%E6%88%8F%E6%9C%AC.png"
          }
        ]
      },
      //电脑配件
      {
        // id: "com_parts",
        name: "电脑配件",
        cate_list:[
          {
            name: "鼠标",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/computer/%E9%BC%A0%E6%A0%87.png"
          }
        ]
      },
      //小爱智能
      {
        id: "AI",
        name: "小爱智能",
        cate_list:[
          {
            name: "小爱音箱",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%B0%8F%E7%88%B1%E6%99%BA%E8%83%BD/%E5%B0%8F%E7%88%B1%E9%9F%B3%E7%AE%B1.jpg"
          },
        ]
      },
      //路由器
      {
        id:"router",
        name:"路由器",
        cate_list:[
          {
            name:"小米路由器",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E8%B7%AF%E7%94%B1%E5%99%A8/%E5%B0%8F%E7%B1%B3%E8%B7%AF%E7%94%B1%E5%99%A8.png"
          },
          {
            name: "Redmi路由器",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E8%B7%AF%E7%94%B1%E5%99%A8/Redmi%20%E8%B7%AF%E7%94%B1%E5%99%A8.png"
          }
        ]
      },
      //生活电器
      {
        id: "ele_life",
        name: "生活电器",
        cate_list:[
          {
            name: "吸尘器",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%9F%E6%B4%BB%E7%94%B5%E5%99%A8/%E5%90%B8%E5%B0%98%E5%99%A8.jpg"
          },
          {
            name: "扫地机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E7%94%9F%E6%B4%BB%E7%94%B5%E5%99%A8/%E6%89%AB%E5%9C%B0%E6%9C%BA.jpg"
          }
        ]
      },
      //厨房电器
      {
        id: "ele_kitchen",
        name: "厨房电器",
        cate_list: [
          {
            name: "微波炉",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%8E%A8%E6%88%BF%E7%94%B5%E5%99%A8/%E5%BE%AE%E6%B3%A2%E7%82%89.jpg"
          },
          {
            name: "电磁炉",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%8E%A8%E6%88%BF%E7%94%B5%E5%99%A8/%E7%94%B5%E7%A3%81%E7%82%89.jpg"
          },
          {
            name: "电饭煲",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E5%8E%A8%E6%88%BF%E7%94%B5%E5%99%A8/%E7%94%B5%E9%A5%AD%E7%85%B2.jpg"
          }
        ]
      },
      //智能穿戴
      {
        id: "AI_dress",
        name: "智能穿戴",
        cate_list:[
          {
            name: "智能手环",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4/%E6%99%BA%E8%83%BD%E6%89%8B%E7%8E%AF.png"
          },
          {
            name: "VR眼镜",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4/VR%E7%9C%BC%E9%95%9C.jpg"
          }
        ]
      },
      //出行
      {
        id: "Vehicle",
        name:"出行",
        cate_list:[
          {
            name: "平衡车",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E8%BD%A6%E8%BD%BD%E5%87%BA%E8%A1%8C/%E5%B9%B3%E8%A1%A1%E8%BD%A6.jpg"
          },
          {
            name:"滑板车",
            img:"https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E8%BD%A6%E8%BD%BD%E5%87%BA%E8%A1%8C/%E6%BB%91%E6%9D%BF%E8%BD%A6.jpg"
          }
        ]
      },
      //车载
      {
        // id:"Vehicle",
        name:"车载",
        cate_list:[
          {
            name: "智能后视镜",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E8%BD%A6%E8%BD%BD%E5%87%BA%E8%A1%8C/%E6%99%BA%E8%83%BD%E5%90%8E%E8%A7%86%E9%95%9C.jpg"
          }
        ]
      },
      //个护
      {
        id: "per_health",
        name: "个护",
        cate_list:[
          {
            name: "剃须刀",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E5%89%83%E9%A1%BB%E5%88%80.jpg"
          },
          {
            name: "吹风机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E5%90%B9%E9%A3%8E%E6%9C%BA.jpg"
          },
          {
            name: "毛巾浴巾",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E6%AF%9B%E5%B7%BE%E6%B5%B4%E5%B7%BE.jpg"
          },
          {
            name: "牙刷",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E7%89%99%E5%88%B7.jpg"
          }
        ]
      },
      //健康
      {
        // id:"health",
        name:"健康",
        cate_list:[
          {
            name: "体重秤",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E4%BD%93%E9%87%8D%E7%A7%A4.png"
          },
          {
            name: "走步机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E4%B8%AA%E6%8A%A4%E5%81%A5%E5%BA%B7/%E8%B5%B0%E6%AD%A5%E6%9C%BA.jpg"
          }
        ]
      },
      //耳机
      {
        id: "Dig_parts",
        name: "耳机",
        cate_list:[
          {
            name: "蓝牙耳机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%95%B0%E7%A0%81%E9%85%8D%E4%BB%B6/%E8%93%9D%E7%89%99%E8%80%B3%E6%9C%BA.jpg"
          },
          {
            name: "线控耳机",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%95%B0%E7%A0%81%E9%85%8D%E4%BB%B6/%E7%BA%BF%E6%8E%A7%E8%80%B3%E6%9C%BA.jpg"
          }
        ]
      },
      //手机配件
      {
        id: "phone_parts",
        name: "手机配件",
        cate_list:[
          {
            name: "移动电源",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%95%B0%E7%A0%81%E9%85%8D%E4%BB%B6/%E7%A7%BB%E5%8A%A8%E7%94%B5%E6%BA%90.jpg"
          },
          {
            name: "自拍杆",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%95%B0%E7%A0%81%E9%85%8D%E4%BB%B6/%E8%87%AA%E6%8B%8D%E6%9D%86.jpg"
          },
          {
            name: "数据线",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%95%B0%E7%A0%81%E9%85%8D%E4%BB%B6/%E6%95%B0%E6%8D%AE%E7%BA%BF.jpg"
          }
        ]
      },
      //箱包
      {
        id: "Dig_parts",
        name: "箱包",
        cate_list:[
          {
            name: "旅行箱",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7/%E6%97%85%E8%A1%8C%E7%AE%B1.jpg"
          },
          {
            name:"双肩包",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7/%E5%8F%8C%E8%82%A9%E5%8C%85.jpg"
          }
        ]
      },
      //家居日用
      {
        // id: "day_use",
        name: "家居日用",
        cate_list:[
          {
            name:"保温杯",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7/%E4%BF%9D%E6%B8%A9%E6%9D%AF.jpg"
          },
          {
            name:"笔",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7/%E7%AC%94.jpg"
          },
          {
            name:"雨伞",
            img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/catelist/%E6%97%A5%E7%94%A8%E7%99%BE%E8%B4%A7/%E9%9B%A8%E4%BC%9E.jpg"
          }
        ]
      }
    ]
  },
  scrollToView(e){   
    const cur = e.currentTarget.dataset.current; 
    const id = e.currentTarget.dataset.id;
    console.log(id);
    this.setData({
      toView: id,
      currentTab: cur,
    })
  },
  showcDetail,
  // scrollToView(e){
  //   let id = e.target.dataset.id;
  //   if(id === '1'){
  //     this.setData({
  //       scrollTop: 0
  //     })
  //   }else {
  //     this.setData({
  //       toView: id,
  //       currentIndex: e.target.dataset.index
  //     })
  //   }
  // }

})