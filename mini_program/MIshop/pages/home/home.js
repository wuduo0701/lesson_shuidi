Page({
  data:{
     //初始界面轮播图片
    img_title_Urls:[
      {
        url:"https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_1.jpg"
      },
      {
        url: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_2.jpg"
      },
      {
        url: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_3.jpg"
      }
    ],
    //初始界面按钮图标资源与名字
    img_icon_Urls1:[
      {
        id: 1,
        name: "手机",
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/phone.png",
      },
      {
        id: 2,
        name: "电视",
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/tv.png",
      },
      {
        id: 3,
        name: "电脑",
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/computer.png",
      },
      {
        id: 4,
        name: "助力砍价",
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/bargain.png",
      },
      {
        id: 5,
        name:"0元抽奖",
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/gift.png"
      }
    ],
    //初始界面按钮图标资源与名字
    img_icon_Urls2:[
      {
        id: 6,
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/Assemble.png",
        name: "1分拼团"
      },
      {
        id: 7,
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/Crowd-funding.png",
        name: "小米众筹",
      },
      {
        id: 8,
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/seckill.png",
        name: "小米秒杀"
      },
      {
        id: 9,
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/exchange.png",
        name: "以旧换新"
      },
      {
        id: 10,
        icon_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/special-offer.png",
        name: "9.9元特价"
      }
    ],
    //人气推荐部分
    recommand_name: "人气推荐",
    recommand_img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_4.jpg",
    recommand_title: "清洁湿巾",
    recommand_text: "20片/包*5包/母婴适用/RO纯水/柔软细腻/温和无刺激",
    recommand_price: "￥9.9",
    recommand1:[
      {
        id: 1,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_5.jpg",
        title: "最生活毛巾",
        text: "阿瓦提长绒棉/瑞典抗菌科...",
        price: "￥19.9"
      },
      {
        id: 2,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_6.jpg",
        title: "贝医生牙刷",
        text: "瑞典进口毛刷/专利科学布...",
        price: "￥8.9"
      },
    ],
    recommand2:[
      {
        id: 1,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_7.jpg",
        title: "Type-C耳机",
        text: "USB Type-C接口/动圈+陶...",
        price: "￥99"
      },
      {
        id: 2,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_8.jpg",
        title: "小米手环3/4通用...",
        text: "顺滑柔软、触感舒适...",
        price: "￥19.9"
      }
    ],
    // 猜你喜欢部分
    love_name:"猜你喜欢",
    love:[
      {
        id: 1,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_9.png",
        title: "小米背包",
        text: "4级防泼水/10L容量/轻盈背负/YKK拉链",
        price: "￥29"
      },
      {
        id: 2,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_10.png",
        title: "中性笔10支装",
        text: "4倍书写长度/日本MIKUNI油墨/0.5mm弹簧子弹头...",
        price: "￥9.99"
      },
    ],
    //商品列表
    love1:[
      {
        id: 3,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_11.png",
        title: "Redmi Note 8 Pro",
        text: "6400万旗舰级全场景四摄/前置2000万AI美艳相机/...",
        price: "￥1229起"
      },
      {
        id: 4,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_12.png",
        title: "米家声波电动牙刷",
        text: "高频振动/两档模式/进口纤密软毛/长续航/强防水/...",
        price: "￥39.9"
      },
    ],
    love2:[
      {
        id: 5,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_13.png",
        title: "Redmi 8A",
        text: "5000mAh大电量/最高可选4GB+64GB版本/支持18W...",
        price: "￥699"
      },
      {
        id: 6,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_14.png",
        title: "贝医生牙膏",
        text: "0添加色素防腐剂/选用进口研磨剂/不伤牙釉质/加固...",
        price: "￥12.9"
      },      
    ],
    love3:[
      {
        id: 7,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_15.png",
        title: "净水器滤芯",
        text: "拦截5微米以上大颗粒/有效滤除泥沙颗粒、浑浊物...",
        price: "￥59"
      },
      {
        id: 8,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_16.png",
        title: "摄像机云台版",
        text: "1080P高清画质/360度云台全景视角/红外夜视/双向...",
        price: "￥199"
      },
    ],
    love4:[
      {
        id: 9,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_17.png",
        title: "米家毛球修剪器",
        text: "0.35mm微弧护衣网/5叶浮动刀头/90分钟长久续航...",
        price: "￥39.9"
      },
      {
        id: 10,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_18.png",
        title: "5号电池",
        text: "5G双卡全网通网络/骁龙855Plus旗舰处理器/40...",
        price: "￥9.9"
      },
    ],
    love5:[
      {
        id: 11,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_19.png",
        title: "小米9 Pro 5G",
        text: "5G双卡全网通网络/骁龙855Plus旗舰处理器/40...",
        price: "￥3699起"
      },
      {
        id: 12,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_20.png",
        title: "7号电池",
        text: "麦克赛尔监制电池核心/7年长久锁住电量/碱性10粒...",
        price: "￥9.9"
      },
    ],
    love6:[
      {
        id: 13,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_21.png",
        title: "小爱音响Play",
        text: "智能设备控制/人工智能语音对话/就近唤醒/趣味闹钟...",
        price: "￥99"
      },
      {
        id: 14,
        img: "https://bucket-1300705541.cos.ap-chengdu.myqcloud.com/mishop/home/home_22.png",
        title: "小米CC9e",
        text: "前置3200万自拍/索尼4800万超广角三摄/4030mAh...",
        price: "￥1099起"
      }
    ]
  }
})