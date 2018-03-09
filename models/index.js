'use strict';

var path = require('path');
var sequelize = require('../common/sequelize');

function load(name) {
  var model = sequelize.import(path.join(__dirname, name));
  model.sync().then((res)=>{
    console.log(`table ${name} is sync`);
  });
  return model;
}

module.exports = {
  sequelize: sequelize,
  User: load('user'),

  // query: function* (sql, args) {
  //   var options = { replacements: args };
  //   var data = yield this.sequelize.query(sql, options);
  //   if (/select /i.test(sql)) {
  //     return data[0];
  //   }
  //   return data[1];
  // }
};
