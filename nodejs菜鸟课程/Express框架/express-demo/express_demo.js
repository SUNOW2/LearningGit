/**
 * Created by 16056 on 2017/3/2.
 */
//引用Express模块，并在客户端发起请求后，响应请求
var express = require('express');
var app = express();

//app.get():用于指定不同的访问路径对应的回调函数
//app.use():用于调用中间件，返回一个函数
app.get("/", function(req, res){
    res.send("hello " + "world");
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('应用实例:http://%s:%s',host, port);
});