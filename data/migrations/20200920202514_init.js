exports.up = function(knex) {
    return knex.schema.createTable("strains", (tbl) => {
        tbl.increments();
        tbl.string("strain_id");
        tbl.string("strain").notNullable().unique().index();
        tbl.string("type").notNullable();
        tbl.integer("rating").notNullable();
        tbl.text("effects").notNullable();
        tbl.text("flavors").notNullable();
        tbl.text("description").notNullable();
      })
      .createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("username").notNullable().unique().index();
        tbl.string("password").notNullable();
        tbl.boolean("role").defaultTo(false)
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users").dropTableIfExists("strains");
};

// after making a change rollback, latest, then run seeds again