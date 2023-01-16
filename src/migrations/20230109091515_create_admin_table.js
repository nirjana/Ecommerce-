/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('admin', (table) => {
        table.increments('id').primary().unsigned();
        table.string('name', 100).notNull();
        table.string('username', 40).notNull();
        table.string('email', 100).unique().notNull();
        table.string('password', 200).notNull();
        table.timestamp('created_at').default(knex.fn.now()).notNull();
        table.timestamp('updated_at').default(knex.fn.now()).notNull();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('admin')
};
