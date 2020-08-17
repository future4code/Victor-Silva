import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
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
            directory: path.resolve(__dirname, 'src', 'Database', 'migrations'),
      },
      seeds: {
            directory: path.resolve(__dirname, 'src', 'Database', 'seeds'),
      },
};
