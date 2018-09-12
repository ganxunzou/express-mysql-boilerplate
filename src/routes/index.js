var users = require('./users');

function routes(app){
  // /
  app.get('/', function(req, res, next) {
    console.log('aaa')
    res.render('index', { title: 'Express', path:'index', isLogin: req.session.isLogin});
  });

  // /users
  app.use('/users', users);
}

module.exports = routes;
