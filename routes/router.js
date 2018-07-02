// 路由规则
// 路由对象
// router.js职责：设置路由规则

const express = require('express');
const indexCtrl = require('../controllers/index');
const userCtrl = require('../controllers/user');
const topicCtrl = require('../controllers/topic');
// 创建路由
const router = express.Router();
// 导出模块
module.exports = router;

// 1，index.js 不需要登录展示的功能
router.get('/', indexCtrl.showIndex);

// 2，user.js 登录 注册 退出
router.get('/signin', userCtrl.showSignin)
      .post('/signin', userCtrl.handleSignin)
      .get('/signup', userCtrl.showSignup)
      .post('/signup', userCtrl.handleSignup)
      .post('/signout', userCtrl.handleSignout);

// 3，topic.js
// .get('/topic/create', topicCtrl.showCreate)
// .post('/topic/create', topicCtrl.handleCreate)
// // 动态路由，可以传递参数
// // 演示url传参
// .get('/topic/show', topicCtrl.showTopic)
// .get('/topic/:topicID', topicCtrl.showTopic)
// .get('/topic/:topicID/edit', topicCtrl.showEdit)
// .post('/topic/:topicID/edit', topicCtrl.handleEdit)
// .get('/topic/:topicID/delete', topicCtrl.handleDelete);