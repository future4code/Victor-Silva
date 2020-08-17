import { IUser } from '../Types/index';
import { v4 } from 'uuid';

import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

class DatabaseController {
      database = knex({
            client: 'mysql',
            connection: {
                  host: process.env.DB_HOST,
                  port: Number(process.env.DB_PORT || '3306'),
                  user: process.env.DB_USER,
                  password: process.env.DB_PASSWORD,
                  database: process.env.DB_NAME,
            },
      });

      async createUser(user: IUser): Promise<void> {
            try {
                  await this.database('users').insert({
                        id: v4(),
                        name: user.name,
                        email: user.email,
                        password: user.password, // =( Add bycrpt please
                  });
            } catch (error) {
                  if (error.code === 'ER_DUP_ENTRY') {
                        throw 'O usuário já existe';
                  } else {
                        throw 'Houve um erro ao criar o novo usuário';
                  }
            }
      }
      async getUserByEmail(email: string): Promise<any> {
            try {
                  const query = await this.database('users')
                        .select('id', 'name', 'email', 'password')
                        .where({ email });

                  return query[0];
            } catch (error) {
                  throw 'Usuário inexistente';
            }
      }
      async getUserById(id: string): Promise<any> {
            try {
                  const query = await this.database('users')
                        .select('id', 'name', 'email')
                        .where({ id });

                  return query[0];
            } catch (error) {
                  throw 'Usuário inexistente';
            }
      }
}

export default new DatabaseController();
