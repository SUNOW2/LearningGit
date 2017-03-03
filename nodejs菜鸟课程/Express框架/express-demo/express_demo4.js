/**
 * Created by 16056 on 2017/3/2.
 */
//在表单中通过POST方法提交两个参数，使用express_demo4文件内
// 的process_post路由器来处理输入
var express = require('express');
var app = express();
//bodyParser是一个中间件，用于解析客户端请求的body中的内容，内部使用JSON编码处理
//，url编码处理以及对于文件的上传处理
var bodyParser = require('body-parser');

//创建 application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index1.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index1.html");
});

app.post('/process_post', urlencodedParser, function (req, res) {
//    输出JSON格式
    response = {
        first_name: req.body.first_name,
        second_name: req.body.second_name
    };
    console.log(response);
    //JSON.stringify用于系列化对象，也就是将对象的类型转化为字符串类型
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例: 访问地址:http://%s:%s", host, port);
});
