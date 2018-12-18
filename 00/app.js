// express 启动服务器
const express = require('express'); 
const fs = require('fs');
const path = require('path');

const app = express(); //创建服务器 

app.get('/index', (req, res) => {
    // 读取index.html的内容进行返回 
    // fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    //     //判断
    //     res.end(data);
    // })

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/index');
})

//处理路由
app.use((req, res) => {
    console.log(req.url);
    console.log(req.method);

    //之前学过的res的属性 
    // res.statusCode = 200;
    // res.statusMessage = 'not Found'; 
    // res.setHeader(k, v);
    // res.writeHead(200, 'aa', {k: v})
    // res.write(); 
    // res.end('aa');

    // express中拓展的属性和方法
    // res.status(200); 状态码
    // res.set(k, v);   响应头
    // res.send();      响应主体 = 返回内容 + 设置编码 ·
    // res.sendFile();  返回文件 = 读取文件  + 设置mime类型 + res.end(data);
    // res.redirect();  页面重定向 

    // fs.readFile(path.join(), (err, data) => {
    // ... 判断
    //  设置mime类型
    //  res.end(data);
    // })

    // res.statusCode = 302;
    // res.setHeader('location', '/');
    // res.end(); 

    res.status(404); 
    res.set('location', '/list');


    res.send('ok');
    
});

//启动服务器
app.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));