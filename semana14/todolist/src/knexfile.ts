import path from 'path';

module.exports = {
      migrations: {
            directory: path.resolve(__dirname + '/Infra/migrations'),
            tableName: 'knex_migrations',
      },
};
