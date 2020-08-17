import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
      return knex.schema.createTable('task_user_relation', (table) => {
            table.uuid('task_id').references('id').inTable('todolist');
            table.uuid('user_id').references('id').inTable('users');
      });
}

export async function down(knex: Knex): Promise<void> {
      return knex.schema.dropTable('todolist_user_relation');
}
