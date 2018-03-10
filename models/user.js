var utility = require('utility');
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id:{ 
      type: Sequelize.INTEGER, 
      autoIncrement: true ,
      primaryKey: true
    }, // 自增ID
    // uuid: {
    //   type: DataTypes.UUID,
    //   defaultValue: DataTypes.UUIDV1,
    //   primaryKey: true
    // },
    username: {
      type: Sequelize.STRING
    },
    password_sha: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: 'user password hash',
      set(val){
        // 密码存储自动sha值
        this.setDataValue('password_sha', utility.sha1(val));
      }
    }
  },{
    tableName: 'com_user',
    comment: 'this is user table',
    indexes: [
      // 在 name 上创建一个唯一索引
      {
        unique: true,     
        fields: ['username']
      },
      {
        fields: ['gmt_modified']
      }
    ]
  });

  // 创建密码SHA值
  function createPasswordSha(password){
    utility.sha1(password);
  }

  // 用户认证
  function auth(username, password){
    return User.findByName(username).then(user=>{
      if (user) {
        var sha = User.createPasswordSha(password);
        if (user.password_sha !== sha) {
          user = null;
        }
      }
      return user;
    })
  }

  // 查询根据用户名
  function findByName(username){
    return User.findOne({where: {username}});
  }

  // createUser
  function createUser({username,password,email}){
    return User.findByName(username).then(user=>{
      if(user){
        return {state:'error', msg:'用户已存在', user:'null'}
      } else {
        return User.create({username, password_sha:password ,email}).then(result=>{
          return {state:'success', msg:'用户创建成功'};
        }).catch(error=>{
          return {state:'error', msg: error}
        });
      }
    })
  }

  // 注入静态函数
  Object.assign(User,{
    createPasswordSha,
    auth,
    findByName,
    createUser
  })

  return User;
};

//////////////////////
