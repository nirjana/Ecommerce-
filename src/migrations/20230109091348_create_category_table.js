/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('category', (table) => {
        table.increments('id').primary().unsigned();
        table.string('category', 100).notNull();
        table.timestamp('created_at').default(knex.fn.now()).notNull();
        table.timestamp('updated_at').default(knex.fn.now()).notNull();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('category')
};
