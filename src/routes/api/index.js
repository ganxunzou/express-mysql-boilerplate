import express from 'express';
var router = express.Router();

router.use(function(request, response, next) {
  console.log('Time: ', Date.now());
  response.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
  next();
});


router.get('/test', (req, res, next) => {
  res.end(JSON.stringify({name: 'ganxz'}));
})

module.exports = router;