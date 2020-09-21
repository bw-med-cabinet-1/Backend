exports.up = function(knex) {
    return knex.schema.createTable("strains", (tbl) => {
        tbl.increments();
        tbl.string("strain_name").notNullable().unique().index();
        tbl.string("type").notNullable();
        tbl.string("thc_content");
        tbl.string("cbd_content");
        tbl.text("symptoms");
        tbl.text("effects");
        tbl.text("description");
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