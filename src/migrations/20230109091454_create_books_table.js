/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('books', (table) => {
        table.increments('id').primary().unsigned();
        table.string('name', 100).notNull();
        table.string('description', 100).notNull();
        table.string('genre', 100).notNull();
        table.string('author', 100).notNull();
        table.integer('ratings');
        table.integer('stock').notNull();
        table.integer('hit').notNull();
        table.integer('category_id').references('id').inTable('category').notNull();
        table.timestamp('created_at').default(knex.fn.now()).notNull();
        table.timestamp('updated_at').default(knex.fn.now()).notNull();
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('books')
};
