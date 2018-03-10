# express-mysql-boilerplate
这是一个express + Mysql 的示例工程。用到以下技术点
- Express 4
  - express-session
  - express-promise
  - 自定义中间件（路劲拦截器）
- Mysql
  - Sequelize 4

# 使用
- 数据库
数据库配置在`/common/sequelize.js`中，默认配置如下：
```
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
```

- 开始
```
git clone git@github.com:ganxunzou/express-mysql-boilerplate.git

cd express-mysql-boilerplate

npm i 

npm start
```

# 功能
- 登录
- 注册
- 路径拦截
- session简单管理


# 备注
这不是已经很好的示例工程，吐槽一下，用jade写界面要死要死的。下一个版本打算用`React SSR`试试。
