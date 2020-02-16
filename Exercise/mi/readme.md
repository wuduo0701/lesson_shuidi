> 声明：此作品只用于个人学习
# 前言 

微信小程序作为一款耳熟能详的应用，相信大家或多或少都已经有过这方面的接触了。作为一名刚接触前端不久的小白，手写一款小程序是一次很好的对知识的巩固。下面让我们来开始小程序的开发吧。
## 开发准备
- 开发工具:[VSCode](https://code.visualstudio.com/Download)          [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=201714)
- [图标icon](https://www.iconfont.cn/)
- [微信开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [有赞组件库](https://youzan.github.io/vant-weapp)
- [自己Mock的数据](https://github.com/1970186643/lesson_shuidi/blob/master/mini_program/MIshop/utils/data.js)
## 项目目录结构
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704c775205b1e1a?w=407&h=780&f=png&s=45355)
# 页面解构
## 商城首页
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704ca337a7c73b3?w=360&h=642&f=gif&s=20735531)
### 页面解析
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704cde4ab97c595?w=535&h=668&f=png&s=207788)
- Navigation是小程序的顶部导航组件。原生的Navigation组件并不满足的我们的需求，我们需要在其中加一个搜索框，这就需要我们对其进行自定义了。好了话不多说，撸起袖子就是干。
#### Navigation
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704caa27a4fe369?w=375&h=67&f=png&s=6490)
我们先要对你需要修改的页面json文件进行配置

` {
  "navigationStyle": "custom"
} `

以为写出来的Navigation需要适配所有手机，我们也需要对app.js进行修改。
`
App({
  onLaunch: function () {
    // 获取顶部栏信息
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    navHeight: 0
  }
})
`

微信官方提供了查询状态栏的高度的[API](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)(wx.getSystemInfo)，大家也可以自己看看哦。

然后就是我们自定义导航栏的时候啦。直接上代码

`
<view>
  <view class='nav bg-white' style='height:{{navH}}px'>
    <view class='nav-title'>
      <view class="INinputheader">
				<image src="../../images/icon/mi.png" mode="widthFix" class="image"/>
				<text>小米</text>
        <icon class="INsearchicon" type="search" size="12"/>
        <navigator url="../search/search">
            <input class="weui-input" placeholder="搜索商品"/>
        </navigator>
      </view>
    </view>
  </view>
</view>
`

由于自定义导航栏的代码过于累赘，我们在此就不贴出来了。大家可以点击[这里](https://github.com/1970186643/lesson_shuidi/blob/master/mini_program/MIshop/pages/home/home.wxss)
查看哦。其实还是觉得自定义的导航栏有点丑，但想要模仿的一模一样真的挺困难的。
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704cd1a2b6ce0c1?w=255&h=255&f=jpeg&s=10432)

- 首页的轮播图区域，微信官方文档提供了[swiper组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)，直接用就好了。所以多看文档真的是一种有效的学习手段。
- 首页的频道分类页面分别由不同的页面构成，点击相应的icon进行跳转

我的思路是在js文件下每个icon下写对应的跳转后的url，这样使用wx:for就能跳转到各自相应的页面了，下面是部分代码。

`
<view class="container1">
    <view class="flex-box" >
        <view class="list-item" wx:for="{{img_icon_Urls1}}" wx:for-item="icon1" wx:key="index">
            <navigator url="{{icon1.url}}">
                <image src="{{icon1.icon_img}}" class="icon-size"/>
            </navigator>
        </view> 
    </view>
    <view class="flex-box" >
        <view class="list-item" wx:for="{{img_icon_Urls1}}" wx:for-item="icon1" wx:key="index">
            <text class="text-center">{{icon1.name}}</text>
        </view> 
    </view>
    <view class="flex-box" >
        <view class="list-item" wx:for="{{img_icon_Urls2}}" wx:for-item="icon2" wx:key="index">
            <image src="{{icon2.icon_img}}" class="icon-size"/>
        </view> 
    </view>
    <view class="flex-box" >
        <view class="list-item" wx:for="{{img_icon_Urls2}}" wx:for-item="icon2" wx:key="index">
            <text class="text-center">{{icon2.name}}</text>
        </view> 
    </view>
</view>
`

- 这里数据我们都是放在一个js文件中的，在全局app.js进行了引用

`
import data from "./utils/data";
App({
  onLaunch: function () {
    Object.assign(this.globalData,data);
    },
    globalData: {
    userInfo: null,
    }
})
`

这样我们在每个页面就可以引用数据的时候都需要声明以下代码，这样我们就可以在app.js文件中拿到自己需要的数据。

`
const app = getApp();
`

下面时商城首页的js文件

`
const showDetail=(e)=>{
  const id = e.currentTarget.dataset.pid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
const app = getApp();
Page({
  data:{
    img_title_Urls:[],
    img_icon_Urls1:[],
    img_icon_Urls2:[],
    recommand:[],
    love:[],
  },
  onLoad(){
    const img_title_Urls = app.globalData.img_title_Urls,
          img_icon_Urls1 = app.globalData.img_icon_Urls1,
          img_icon_Urls2 = app.globalData.img_icon_Urls2,
          recommand = app.globalData.recommand,
          love = app.globalData.love;         
    this.setData({
      img_title_Urls,
      img_icon_Urls1,
      img_icon_Urls2,
      recommand,
      love,
      navH: app.globalData.navHeight
    });
  },
  showDetail,
})
`

### 功能
- 首页搜索功能
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704cfe4a49e4187?w=360&h=644&f=gif&s=7145730)

页面解析：这里我们引用了有赞的组件的搜索框，如果搜索的内容匹配到了数据，我们就在其下方显示出来。

`
<van-search placeholder="搜索商品" value="{{ value }}" background="#FFFFFF"  bind:search="Search"/>
<view class="box" wx:for="{{good_list}}" wx:key="index">
  <view data-pid="{{item.id}}" bindtap="showDetail">
    <text >{{item.name}}</text>
    <view class="line"></view>
  </view>
</view>
`

思路分析：

- 输入需要查询的关键字或者准确的内容，进行模糊查询。
- 查询后就在下方显示出查询到的内容。
- 点击内容会跳到相应商品的详细信息。

`
var search = (list,keyword) =>{ //模糊查询函数
  var arr = [];
  for(let i = 0;i < list.length;i++)
  {
    if(list[i].split(keyword).length > 1){
      arr.push(list[i])
    }
  }
  return arr;
};
const showDetail=(e)=>{
  const id = e.currentTarget.dataset.pid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
const app = getApp();
Page({
  data:{
    commodity:[],   //总商品列表
    name:[],
    good_list:[],   //搜索后的商品列表
    classify:[
      {
        name:"手机",
        url:"../navi/phone/phone"
      }
    ]
  },
  Search(event){
    const name = this.data.name;
    const commodity = this.data.commodity;
    const keyword = event.detail;
    // wx.setStorageSync('history',keyword); //设置搜索历史
    var arr = [];
    arr = search(name,keyword);
    var product = [];
    for(let i = 0;i < commodity.length;i++){
      for(let j = 0;j < arr.length ;j++){
        if(commodity[i].name == arr[j]){
          product.push(commodity[i]);
        }
      }
    }
    this.setData({
      good_list:product
    })
  },
  onLoad:function(){
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return true;
    });
    var name = [];
    for(let i = 0;i<commodity.length;i++){
      name.push(commodity[i].name)
    }
    this.setData({
      name,
      commodity
    })
  },
  showDetail,
})
`
## 商品分类页面
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d3dfea7a7bf2?w=360&h=642&f=gif&s=8582272)
### 页面解析
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d1c85d8b1079?w=377&h=670&f=png&s=56422)

思路分析：
- 页面由两个scroll-view构成，左边为商品的菜单栏，右边为对应菜单的商品区。点击左边的菜单栏项目会跳到相应的商品区。这里由scroll-view里的参数scroll-into-view可以实现，值得注意的时此时设的id不能为数字，否则会报错。有不懂的童鞋，可以点击[这里](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)参考官方文档。

`
<view class="main">
    <scroll-view  scroll-y="{{true}}" class="nav" scroll-left="{{navScrollLeft}}" scroll-with-animation="{{true}}" >
        <block wx:for="{{navData}}" wx:for-index="id" wx:for-item="navItem" wx:key="index">
            <view class="nav-item {{currentTab == id?'active':''}}"  data-current="{{id}}" data-id="{{navItem.id}}"  bindtap="scrollToView">{{navItem.name}}</view>
        </block>
    </scroll-view>
    <scroll-view scroll-y="{{true}}" scroll-with-animation="{{true}}" scroll-into-view="{{toView}}" enable-back-to-top scroll-top="{{scrollTop}}" class="nav1">
        <view  wx:for="{{item}}" wx:for-item="item" wx:key="index" >
            <view id="{{item.id}}" >
                <view class="flex-box">
                    <view class="linebox">
                        <view class="line1"></view>
                    </view>
                    <text class="title">{{item.name}}</text>
                    <view class="linebox">
                        <view class="line2"></view>
                    </view>
                </view>
                <view class="flex-box" >
                    <view  wx:for="{{item.cate_list}}" wx:for-item="cate" wx:key="{{item.id}}">
                        <image src="{{cate.img}}" class="img-size list-item" mode="widthFix" data-cid="{{cate.id}}" bindtap="showcDetail"/>
                        <text class="font">{{cate.name}}</text>
                    </view> 
                </view>
            </view>
        </view>
    </scroll-view>
</view>
`

这里是跳转到相应商品区的代码。

`
  scrollToView(e){   
    const cur = e.currentTarget.dataset.current; 
    const id = e.currentTarget.dataset.id;
    this.setData({
      toView: id,
      currentTab: cur,
    })
  },
`

- 点击右边的商品区域会跳转到对应商品的详细信息页面。因为我们这里的商品详情页都是统一做的，跳转的时候我们会传递商品的id过去,在详情页我们会对其匹配相应的id，这样商品的详细信息就可以对应的输出来了。下面为跳转到商品详情页代码。

`
const showcDetail=(e)=>{
  const id = e.currentTarget.dataset.cid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
`

## 商品详情页面
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d8e4a7545ae4?w=360&h=644&f=gif&s=5143449)
### 页面解析
- 这里为所有商品的统一界面，跳转时我们会把相应商品的数据传输到这个页面，这样显示的就是为不同的商品界面。
- 由于原生的weui有些太丑了，就引用了有赞的tabs和GoodsAction组件。有兴趣的童鞋可以去有赞的官网看看。

这里贴代码的时候mackdown编辑出了问题，所以只贴了tabs标签和下方的加入购物车部分。完整的代码可以点[这里](https://github.com/1970186643/lesson_shuidi/blob/master/mini_program/MIshop/pages/commodity/commodity.wxml)

`
  <view>
    <van-tabs active="{{active}}"  title-active-color="#ff4a00" title-inactive-color="#c0c0c0c" duration="0.1" 	>
      <van-tab title="商品详情">
        <view wx:for="{{commodity.overview}}" wx:key="index">
          <image src="{{item}}" mode="widthFix" class="i1"/>
        </view>
      </van-tab>
      <van-tab title="规格参数">
        <view wx:for="{{commodity.parameter}}" wx:key="index">
          <image src="{{item}}" mode="widthFix" class="i1"/>
        </view>
      </van-tab>
    </van-tabs>
  </view>
  <van-goods-action>
    <van-goods-action-icon icon="cart-o" text="购物车" bind:click="go_sh_cart"/>
    <van-goods-action-button type="warning"color="#ff4a00" text="加入购物车"  bind:click="go_select"/>
    <van-goods-action-button type="danger" text="立即购买"  />
  </van-goods-action>  
`

## 商品类别选择 
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704da72fd155227?w=360&h=642&f=gif&s=1834257)
### 页面解析
- 商品跳转后,会取得对应商品的数据。点击不同的商品类别，对应的值会进行改变。代码有点过长，这里只贴了部分，有兴趣的童鞋可以点击[这里](https://github.com/1970186643/lesson_shuidi/tree/master/mini_program/MIshop/pages/select_commodity)查看完整的。

`
  onLoad: function (options) {
    const id = options.id;
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return item.id == id;
    });
    this.setData({
      id:commodity[0].id,
      commodity:commodity[0],
      name:commodity[0].name,
      version:commodity[0].select_list.version[0].name,
      price:commodity[0].select_list.version[0].price,
      color:commodity[0].select_list.color[0].name,
      img_url:commodity[0].select_list.color[0].img  
    });
  },
`
- 这里同样用了有赞的步进器组件

wxml

`
<van-stepper value="{{ 1 }}" max="5" integer="true" bind:change="onChange" button-size="40" input-width="40"/>
`

js(这里可以取得步进器中的值)

`
  onChange(event) {
    const number = event.detail;
    // console.log(number)
    this.setData({
      num:number
    })
  }
`
- 点击确定按钮后，加入到购物车当中，且不会影响到前面所添加的商品。这里确实卡了好久，脑壳疼。这里有个小坑，在使用wx.showToast要使用一个延时函数，否则调用成功提示会一闪而过。

`
  submit(){
    const that = this;
    wx.setStorageSync('id',that.data.id);
    wx.setStorageSync('name',that.data.name);
    wx.setStorageSync('img_url',that.data.img_url);
    wx.setStorageSync('version',that.data.version);
    wx.setStorageSync('price',that.data.price);
    wx.setStorageSync('color',that.data.color);
    wx.setStorageSync('num',that.data.num);
    wx.setStorageSync('selected',that.data.selected);
    const value = wx.getStorageSync('cart_list');
    const temp = {
      'id':wx.getStorageSync('id'),
      'name': wx.getStorageSync('name'),
      'img_url': wx.getStorageSync('img_url'),
      'version': wx.getStorageSync('version'),
      'price': wx.getStorageSync('price'),
      'color': wx.getStorageSync('color'),
      'num': wx.getStorageSync('num'),
      'selected': wx.getStorageSync('selected'),
    }
    if(value == ""){
      wx.setStorageSync('cart_list', [temp]);
    }else{
      wx.setStorageSync('cart_list', [temp, ...value]);
    }
//使用wx.showToast时要使用一个延时(setTimeout)，否则成功调用后会一闪而过
    wx.showToast({
      title: "成功加入购物车",
      icon: 'success',
      duration: 2000,
      success(){  
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        }, 1000);
      }
    })
  }
`
## 地址选择和新增地址页
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704dcdbc3c81235?w=360&h=640&f=gif&s=1585934)
### 页面解析
- 这里新增的地址都是通过wx.getStorageSync的API保存在本地，以便后续的添加，当然有数据库操作更加方便。
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704dd3bc79473b2?w=800&h=736&f=png&s=138560)


## 发现页
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d45b8975706a?w=360&h=644&f=gif&s=1759814)
这里没写太多，只是简单的切了下页面，发现抽奖功能没后台不好做。
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d4a710d1d2d7?w=320&h=240&f=jpeg&s=28923)
## 购物车页面
### 页面解析
首先判断购物车cart_list的值是否存在，这里用
`
wx:if="{{cart_list == ''}}"
`
作为判断条件。
- 购物车为空时，显示购物车还是空的，到小米商城逛逛。点击按钮会跳转到商城首页。
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d4dab7eff38c?w=377&h=669&f=png&s=17405)
- 购物车不为空时，可以对商品进行选择，计算总价，计算总数，滑动删除等操作。
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704d7e4ea329d03?w=360&h=646&f=gif&s=14062871)

`
<view class="container">
  <view wx:if="{{cart_list == ''}}">
    <view class="empty">
      <view class="cart_icon">
        <image src="../../images/icon/cart_empty.png" mode="aspectFill" />
      </view>
      <view class="prompt">购物车还是空的</view>
      <button type="warn" size="default" class="button" style="background: #ff6600;" bindtap="go">
        <text >到小米商城逛逛</text>
      </button>
    </view>
  </view>
  <view wx:else class="mt">
    <view wx:for="{{cart_list}}" wx:key="index">
			<view class="weui-slidecells">
        <mp-slideview buttons="{{slideButtons}}" bindbuttontap="slideButtonTap" data-index="{{index}}">
          <view class="weui-slidecell">
						<view class="box">
							<view class="icon">
								<icon wx:if="{{item.selected}}" type="success" color="rgb(255,103,0)" bindtap="selectList" data-index="{{index}}" size="20" class="i"/>
								<icon wx:else type="circle" bindtap="selectList" data-index="{{index}}" size="20" color="rgb(255,103,0)" class="i"/>
							</view>
							<view class="navi">
								<navigator url="../commodity/commodity?id={{item.id}}">
									<image  src="{{item.img_url}}"></image>
								</navigator>
							</view>
							<text class="title">{{item.name}} {{item.version}} {{item.color}}</text>
							<text class="num">{{item.num}} X</text>
							<text class="price">　{{item.price}}元</text>
						</view>
         	</view>
        </mp-slideview>
			</view>				
    </view>
    <view class="submit_title">
			<view class="icon">
				<icon wx:if="{{selectedAll}}" type="success" size="20" color="rgb(255,103,0)" bindtap="selectAll" class="i1"/>
				<icon wx:else type="circle" size="20" color="rgb(255,103,0)" bindtap="selectAll" class="i1"/>
			</view>
			<text class="all">全选</text>
			<view class="allprice">
				<text >合计:</text>
				<text class="totalprice">　{{totalPrice}}元</text>
			</view>
			<view class="submit">结算({{totalNum}})</view>
    </view>
		</view>  
</view>
`
### 功能
- 判断商品是否选中

`
  selectList(e){
    const index = e.currentTarget.dataset.index;
    let cart_list = this.data.cart_list;
    const selected = cart_list[index].selected;
    cart_list[index].selected = !selected;
    const symbol = cart_list.some(cart => {
      return cart.selected === false;
    });
    if (symbol) {
      this.data.selectedAll = false;
    } else {
      this.data.selectedAll = true;
    }
    this.setData({
      cart_list,
      selectedAll: this.data.selectedAll
    });
    this.getTotalPrice();   //状态改变，重新计算总价
  }
`

- 计算商品总价和总数

`
  getTotalPrice(){
    let cart_list = this.data.cart_list;                
    let total = 0,
        num = 0;
    for(let i = 0; i<cart_list.length; i++) {         
        if(cart_list[i].selected) {                   // 判断选中才会计算价格
            total = total + cart_list[i].num * cart_list[i].price;
            num = num + parseInt(cart_list[i].num);     
        }
    }
    this.setData({                                
      cart_list: cart_list,
      totalPrice: total,
      totalNum: num
    });
  }
`

- 判断商品是否全选

`
  selectAll(e){
    let selectedAll = this.data.selectedAll;   
    selectedAll = !selectedAll;
    let cart_list = this.data.cart_list;
    for (let i = 0; i < cart_list.length; i++) {
      cart_list[i].selected = selectedAll;            // 改变所有商品状态
    }
    this.setData({
        selectedAll: selectedAll,
        cart_list: cart_list
    });
    this.getTotalPrice();                               // 重新获取总价
  }
`

- 删除商品
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704dc4b03231471?w=360&h=638&f=gif&s=543965)

`
  slideButtonTap(e){
    const index=e.currentTarget.dataset.index;
    console.log(index);
    this.data.cart_list.splice(index, 1);
    wx.clearStorageSync("num");
    this.setData({
      cart_list: this.data.cart_list
    });
  }
`
这里我们使用的是左滑删除，微信官方文档提供了Slideview组件，可以点击[这里](https://developers.weixin.qq.com/miniprogram/dev/extended/weui/slideview.html)查看。

## 我的页面
![alt](https://user-gold-cdn.xitu.io/2020/2/16/1704dc53b94aff6f?w=378&h=669&f=png&s=34924)
### 页面解析
这里我们只做简单的页面，头像和名字都是通过open-data来获取的微信头像和名字。这里大部分都是需要后台来做的，就没有过多的花费时间了。

# 结语
再写这个项目的时候碰到了许多的难题，每天都是在写bug和debug中度过。程序员的一天就是这么真实，但是这也让我学习了很多，写代码一定要亲手尝试，这样才能更快的提升自己的能力。由于小米商城这个项目是在太大了，只做了部分主要功能。希望能给予他人一点帮助，如果文章中有错误或不妥之处，欢迎大家指正。这里是项目的[地址](https://github.com/1970186643/lesson_shuidi/tree/master/mini_program/MIshop)，如果觉得还不错的话，就star一下吧。