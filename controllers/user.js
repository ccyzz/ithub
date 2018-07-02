
const db = require('./db_helper');

// 1,展示登录页面
exports.showSignin = (req, res) => {
    res.send('showSignin');
}

// 2，处理登录页面
exports.handleSignin = (req, res) => {
    res.send('handleSignin');
}

// 3，展示注册页面
exports.showSignup = (req, res) => {
    res.send('showSignup');
}

// 4，处理登录页面
exports.handleSignup = (req, res) => {
    res.send('handleSignup');
}

// 5， 退出
exports.handleSignout = (req, res) => {
    res.send('handleSignout');
}


