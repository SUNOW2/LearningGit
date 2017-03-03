/**
 * Created by 16056 on 2017/3/2.
 */
//GET方法
var express = require('express');
var app = express();

//app.use用于调用中间件，express.static用于设置静态文件
app.use(express.static('public'));

//用于指定不同路径对应的回调函数
app.get("/index.html", function (req, res) {
    //res.sendFile(path, [,options], fn):用于指定路径的文件，
    // 会自动根据文件extension设定Content-Type
    //__dirname:用于获取当前文件所在目录的完整绝对路径
    console.log(__dirname);
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', function (req, res) {
    //    输出JSON格式
    response = {
        first_name: req.query.first_name,
        second_name: req.query.second_name
    };
    // console.log(response);
    //JSON.stringify:用于系列化对象，也就是将对象的类型转化为字符串
    // 类型（或者更确切的说是JSON类型）
    res.send(JSON.stringify(response));
});

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址 http://%s:%s", host, port);
});

//