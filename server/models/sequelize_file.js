'use strict';

var Sequelize = require('sequelize'); 
var sequelize = new Sequelize('postgres://postgres:Melissa13@localhost:5432/lymt_dev',{omitNull:true});

module.exports = sequelize; 



