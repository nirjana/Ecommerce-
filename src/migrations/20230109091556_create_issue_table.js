/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('issue', (table) => {
        table.increments('id').primary().unsigned();
        table.integer('book_id').references('id').inTable('books').notNull();
        table.timestamp('issued_at').default(knex.fn.now()).notNull();
        table.timestamp('book_return_date');
        table.timestamp('user_returned_date');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('issue')
};
