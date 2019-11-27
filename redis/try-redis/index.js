const redis = require('redis');

const client = redis.createClient(6379,'192.168.31.128');
// Key:value
// client.set('hello', 5, function(err, obj){
//     if(err)
//         throw err;
//     console.log(obj);
// });
// client.get('hello', function(err, data){
//     console.log(data);
// })
client.incr('hellos', function(err,data){
    console.log(data);
})
