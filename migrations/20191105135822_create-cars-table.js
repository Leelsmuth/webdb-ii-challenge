exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.integer("vin_number", 17).notNullable();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.integer("mileage", 6).notNullable();
    tbl.string("transmission", 128).nullable;
    tbl.string("title_status", 128).nullable;
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
