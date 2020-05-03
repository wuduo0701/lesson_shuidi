 const fs = require('fs');
// fs.readFile('./c.txt',function(err, res){
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(res.toString());
// })
function readFile(){
//     fs.readFile('./a.txt',function(err, res){
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(res.toString());

//     fs.readFile('./b.txt',function(err, res){
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(res.toString());

//     fs.readFile('./c.txt',function(err, res){
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(res.toString());
//         })
//     })
// })
const  aFile = fs.readFileSync('./a.txt');
console.log(aFile.toString());
const  bFile = fs.readFileSync('./b.txt');
console.log(bFile.toString());
const  cFile = fs.readFileSync('./c.txt');
console.log(cFile.toString());
}
readFile();
