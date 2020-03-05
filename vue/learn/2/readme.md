# 动态绑定css
v-bind:class 即 :class
<div v-bind:class="{ active: true }"></div>来判断active类是否应用
可以用在实际项目中的类动态改变

methods 和computed在实际调用函数时不同，methods需要加()