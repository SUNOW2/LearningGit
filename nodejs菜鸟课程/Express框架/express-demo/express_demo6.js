/**
 * Created by 16056 on 2017/3/3.
 */
//Cookie管理
//使用中间件向nodejs服务器发送coookie信息
var express = require('express');
var cookieFarser = require('cookie-parser');

var app = express();
app.use(cookieFarser());

app.get('/', function(req, res){
    console.log("Cooks: ",req.cookies);
    res.end('hello world');
});

app.listen(8081);
