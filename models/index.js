"use strict";
var config = require('config');
var dbConfig = config.get('czujduchConf.db');
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
//var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,config);
} else {
  var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password);
}
var db        = {};

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection with database has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// var Sequelize = require('sequelize');
// var config = require('config');

// var dbConfig = config.get('czujduchConf.db');

// var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
//   host: dbConfig.host,
//   dialect: dbConfig.dialect,

//   pool: {
//     max: dbConfig.max,
//     min: dbConfig.min,
//     idle: dbConfig.idle
//   },

// });

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection with database has been established successfully.');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });

// // load models
// var models = [
//   'users'
// ];

// models.forEach(function(model) {
//   module.exports[model] = sequelize.import(__dirname + '/' + model);
// });

// // export connection
// module.exports.sequelize = sequelize;