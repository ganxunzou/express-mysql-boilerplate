var Auth = require('./Auth')
function middleware(app){
    Auth(app);
}

module.exports = middleware;