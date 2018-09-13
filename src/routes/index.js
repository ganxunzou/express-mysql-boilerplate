var users = require('./view/users');
import api from './api';

function routes(app){
  // /
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', path:'index', isLogin: req.session.isLogin});
  });

  // /users
  app.use('/users', users);


  app.use('/api/v1', api);
}

module.exports = routes;
