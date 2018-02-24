
exports.up = function(knex, Promise) {
  return knex.schema.createTable('resolution', resolution => {
    resolution.increments('id').primary();
    resolution.date('dueDate');
    resolution.string('resolution');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('resolution');
};
