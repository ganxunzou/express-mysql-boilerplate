var Sequelize = require('sequelize');
var DataTypes = require('sequelize/lib/data-types');

var database = {
  db: 'hello_db',
  username: 'root',
  password: 'gxz153759',
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  pool: {
    maxConnections: 10,
    minConnections: 0,
    maxIdleTime: 30000
  },
  logging: !!process.env.SQL_DEBUG,
};

// sync database before app start, defaul is false
database.syncFirst = false;

// add longtext for mysql
Sequelize.LONGTEXT = DataTypes.LONGTEXT = DataTypes.TEXT;
Sequelize.LONGTEXT = DataTypes.LONGTEXT = 'LONGTEXT';

database.define = {
  timestamps: true,
  createdAt: 'gmt_create',
  updatedAt: 'gmt_modified',
  charset: 'utf8',
  collate: 'utf8_general_ci',
};

var sequelize = new Sequelize(database.db, database.username, database.password, database);

// 测试数据库连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
