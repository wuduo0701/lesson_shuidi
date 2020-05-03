前后端分离
如果有上万条数据？  insertMany ([])
mysql 几十万条
千万条  ， 亿 mongodb
查询  查的更快  性能优化
根据查询需求进行优化
type  quantity
quantity  有频繁的需求  100-200
就一个需求， 夹着索引， 在数据库 和 node 中间， 有index存在
type + quantity 一起查询
```
db.inventory.find( { quantity: {    $gte: 100,     $lte:200    } });
查询quantity在100-200之间的内容
db.inventory.createIndex({quantity:1});
创建索引

```


