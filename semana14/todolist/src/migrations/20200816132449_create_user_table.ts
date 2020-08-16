import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
      return knex.schema.createTableIfNotExists('users', (table) => {
            table.uuid('id').primary();
            table.string('name').notNullable();
            table.string('nickname').notNullable().unique();
            table.string('email').unique();
      });
}

export async function down(knex: Knex): Promise<void> {
      return knex.schema.dropTable('users');
}
