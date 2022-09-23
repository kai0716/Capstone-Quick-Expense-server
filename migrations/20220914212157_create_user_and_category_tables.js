exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('avatar_url');
            table.string('username').notNullable();
            table.string('password').notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('category', (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable;
            table.string("title").notNullable;
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table
                .foreign('user_id')
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })

    // .createTable('sub_category', (table) => {
    //     table.increments('id').primary();
    //     table.integer('category_id').unsigned().notNullable;
    //     table.string("title").notNullable;
    //     table.timestamp('updated_at').defaultTo(knex.fn.now());
    //     table
    //         .foreign('category_id')
    //         .references('id')
    //         .inTable('category')
    //         .onUpdate('CASCADE')
    //         .onDelete('CASCADE');
    // })
};

exports.down = function (knex) {
    return knex.schema.dropTable('category').dropTable('users');
};