const fs = require('fs');
// const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
const image = fs.readFileSync("./chepai.jpg").toString("base64");
const AipOcrClient = require('baidu-aip-sdk').ocr;
var client = new AipOcrClient('17712415','kx2YOmPEeZmrEvaFvUvVR2Rq','bC7dtpWDBGTEWHvXTZRkliHVnR9sivHE');

const options = {};
options["multi_detect"] = "true";

client
    .licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })