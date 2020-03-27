const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  hosts: ['http://localhost:9200']
})

client.ping({
  requestTimeout: 30000,
},  function(error){
  if(error){
    console.log('Elasticsearch cluster is down!')
  }else{
    console.log('Everything is OK')
  }
})

// 要有索引 相当于  mongodb collection
client.indices.create({
  index: "juejin"
},function(error, response, status) {
  if(error){
    console.log(error)
  }else{
    console.log('created a new index', response)
  }
})