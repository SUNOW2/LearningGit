/**
 * Created by 16056 on 2017/3/2.
 */
//路由
var express = require('express');
var app = express();

//主页输出"Hello World"
//app.get用于指定不同的访问路径对应的回调函数
//res.send():用于传送HTTP响应
app.get("/", function (req, res) {
    console.log('主页GET请求');
    res.send('Hello GET');
});

//POST请求
app.post('/', function (req, res) {
    console.log('主页POST请求');
    res.send('Hello POST');
});

///list_user页面GET请求
app.get('/list_user', function (req, res) {
    console.log('/list_user GET请求');
    res.send('用户页面请求');
});

///del_user页面请求
//app.get():用于指定不同的路径对应的回调函数
app.get('/del_user', function (req, res) {
    console.log('/del_user 响应DELETE请求');
    res.send('删除页面');
});

// 对页面abcd,abxcd,abedgcd页面请求
app.get('/ab*cd', function (req, res) {
    console.log('/ab*cd GET请求');
    res.send('正则匹配');
});


//设置监听端口是8081
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例:访问地址 http://%s:%s", host, port);
});