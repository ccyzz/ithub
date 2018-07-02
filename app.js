// app.js的作用：
// 1，程序的入口
// 2，监听端口
const express = require('express');
const expressArtTemplate = require('express-art-template');
const app = express();
const router = require('./routes/router');

// 监听端口
app.listen(3000, () => {
    console.log('监听3000');
})

// 静态资源处理
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// 配置模板引擎
app.engine('html', expressArtTemplate);

// 注册路由
app.use(router);