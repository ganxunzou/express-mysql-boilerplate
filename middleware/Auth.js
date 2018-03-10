function auth(app){
    var noLoginUrl = ['/', '/users/login','/users/register'] // 无需登录可以访问的路由地址
    app.use('/', (req, res , next)=>{
        var baseUrl = req.path;
        if(req.method == "GET" && noLoginUrl.indexOf(baseUrl) >-1 ){            
            next();
        } else {
            var session = req.session;
            // 已经登录，或者在做登录验证
            if((session && session.isLogin) || noLoginUrl.indexOf(baseUrl) >-1  ) {
                next();
            } else {
                // 处理最后一次请求路径，登录成功后跳转。
                // req.session.lastPage = req.originalUrl;
                res.redirect('/users/login');
            }
        }
    })
}

module.exports = auth;
