/**
 * Created by 16056 on 2017/3/2.
 */
//静态文件
//express.static用于设置静态文件：图片，CSS,javascript
var express = require('express');
var app = express();

//app.use()调用中间件，返回一个函数
//express.static():静态文件
app.use(express.static('public'));

//app.get():用于指定不同的路径对应的回调函数
app.get('/', function(req, res){
    res.send('Hello World');
});

//设置监听端口
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例: 访问地址:http://%s:%s", host, port);
});