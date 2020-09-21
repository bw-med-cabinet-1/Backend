const bcryptjs = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1, 
          username: 'admin', 
          password: bcryptjs.hashSync('password', 4), 
          role: 1
        },
        {
          id: 2, 
          username: 'user', 
          password: bcryptjs.hashSync('password', 4), 
          role: 0
        },
      ]);
    });
};

