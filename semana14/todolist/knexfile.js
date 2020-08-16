// Update with your config settings.

import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export const db = knex({
      client: 'mysql',
      connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || '3306'),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
      },
      migrations: {
            tableName: 'knex_migrations',
      },
});
