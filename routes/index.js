var users = require('./users');

function routes(app){
  // /
  app.get('/', function(req, res, next) {
    console.log('aaa')
    res.render('index', { title: 'Express', users: '123' , aa: [1,2,3]});
  });

  // /users
  app.use('/users', users);
}

module.exports = routes;