/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable('expenses', (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable();
            table.decimal("amount").notNullable()
            table.string("note");
            table.string("receipt");
            table.string("category").notNullable();
            table.dateTime('date').notNullable();
            table.string('recurring').notNullable()
            table
                .foreign('user_id')
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

        })
        .createTable('incomes', (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable();
            table.decimal("amount").notNullable()
            table.string("note");
            table.string("category").notNullable();
            table.dateTime('date').notNullable();
            table.string('recurring').notNullable()
            table
                .foreign('user_id')
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('incomes').dropTable('expenses');
};
