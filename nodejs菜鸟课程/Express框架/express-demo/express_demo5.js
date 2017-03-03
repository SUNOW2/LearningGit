/**
 * Created by 16056 on 2017/3/2.
 */
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
//multer:是一个中间件
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

//multer是处理文件上传的中间件，用于处理任何表单数据
app.use(multer({dest: '/tmp/'}).array('image'));

app.get('/index2.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index2.html");
});

app.post('/file_upload', function (req, res) {

    //上传的文件信息
    console.log(req.files[0]);
    //设置创建文件的绝对路径
    var des_file = __dirname + "/" + req.files[0].originalname;
    console.log(des_file);
    //读取文件
     fs.readFile(req.files[0].path, function (err, data) {
            //写入创建的文件（文件在express内）
            fs.writeFile(des_file, data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    response = {
                        message: 'File upload successfully',
                        filename: req.files[0].originalname
                    };
                }
                console.log(response);
                //JSON.stringify用于系列化对象，也就是将对象的类型转换成
                //字符串类型
                res.end(JSON.stringify(response));
            });
         });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为: http://%s:%s", host, port);
});

