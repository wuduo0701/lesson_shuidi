- CSS性能优化
  某些操作会导致样式的改变，这时浏览器需要检测这些改变并重新渲染，其中有些操作所耗费的性能更多。
优化重绘与重排
Javascript -> style -> layout -> paint -> composite
1. 改变css属性的时候，尽量不引起重排layout
2. transform cursor 他们非常优秀 直接到达 composite
3. transform VS left top bottom
transform 不会引起重排和重绘

- 重排会导致重新计算整个文档

2：如果元素在一个独立的图层上面，transform cursor 他们非常优秀 直接到达 最后一步composite