var express = require('express');
var router = express.Router();

var models = require('../models');
var User = models.User;

router
  .get('/', (req, res, next) => {
    res.render('user',{title: '用户管理', users: User.findAll(),  path:'user', isLogin: req.session.isLogin});
  })
  .get('/login',(req, res, next)=>{
    res.render('login',{})
  })
  .post('/login',(req, res, next)=>{
    let {username, password} = req.body;
    User.findByName('1').then(user=>{
      // 登录成功
      req.session.isLogin = true;
      
      // 重定向
      if(req.session.lastPage != null){
        res.redirect(req.session.lastPage)
      } else{
        res.redirect('/')
      }
    })
  }).post('/register',(req,res,next)=>{
    let {username,password,email} = req.body;
    console.log(username,password,email)
    User.createUser({username,password,email}).then(state=>{
      res.redirect('/users/login')
    })
  })


module.exports = router;
