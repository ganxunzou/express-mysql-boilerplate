var express = require('express');
var router = express.Router();

var models = require('../models');
var User = models.User;

router
  .get('/', (req, res, next) => {
    res.render('user',{title: '用户管理', users: User.findAll() });
  })
  .get('/all', (req, res, next)=>{
    res.json({
        usesr: User.findAll()
    });
  }).get('/add',(req, res, next)=>{
    
  }).get('/login',(req, res, next)=>{
    res.render('login',{})
  })


module.exports = router;
