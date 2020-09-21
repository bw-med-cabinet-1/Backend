const knex = require('knex');

const knexfile = require('../knexfile');

const enviroment = process.env.NODE_ENV || 'development'
//DB_ENV

module.exports=knex(knexfile[enviroment]);