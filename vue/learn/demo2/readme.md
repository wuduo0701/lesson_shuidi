# 动态绑定css
v-bind:class 即 :class
<div v-bind:class="{ active: true }"></div>来判断active类是否应用
可以用在实际项目中的类动态改变

methods 和computed在实际调用函数时不同，methods需要加()

- v-if 与 v-show的不同
  使用v-if时dom节点不存在,被完全屏蔽了,即会变成-> <!---->
  v-show时dom节点还存在，只是加了css样式display:none

- v-for条件渲染
  - 渲染数组时
    可提供两个参数{{item,index}} in items
    item:数组每一个值， index数组的下标 items为数组名
  - 渲染对象时
    可提供三个参数{{value,name,index}} in object
    value 对象里的属性 ，name即键名 index对象的下标
  最好提供key值--v-key 即 :key
  以便它能跟踪每个节点的身份，从而重用和重新排序现有元素
  
