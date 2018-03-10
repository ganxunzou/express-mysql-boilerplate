const Sequelize = require('sequelize');
const sequelize = new Sequelize('hello_db', 'root', 'gxz153759', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });
  
  // force: true 如果表已经存在，将会丢弃表
  User.sync().then(() => {
    // 表已创建
    return User.create({
      firstName: 'John11',
      lastName: 'Hancock11'
    });
  });

  User.findByName = (firstName)=>{
    console.log('><<<<<<<<<<<<<<<<<<<<<',this)
  }

  User.findByName();

  User.findOne({where: {firstName: 'John11'}}).then(user=>{
    console.log('>>>>>>>>>>>>>>....');
  })
