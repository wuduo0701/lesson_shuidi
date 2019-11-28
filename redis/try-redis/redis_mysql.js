const express = require('express');
const app = express();
var mysql = require('mysql');
var redis = require('redis');

const client = redis.createClient({
    host: '192.168.31.128'
})

var connection = mysql.createConnection({
    host: '192.168.31.128',
    user: 'root',
    password: '1234567890',
    database: 'batschool'
})
connection.connect();
app.get("/api/students", function(req,res){
    client.get('students', (err, reply) => {
        if(err){
            throw error;
        }
        console.log(reply,'-------');
        if(reply){
            res.json(JSON.parse(reply))
        } else {
            connection.query('select * from students',function(error, results, fields){
                if(error){
                    throw err;
                }
                client.set('students',JSON.stringify(results),function(){
                    res.json(results);
                });   
            });
        }
    })   
});

app.listen(1314,function(){
    console.log("Example app listening on port 1314");
})