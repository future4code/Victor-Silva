import User from '../Models/User';
import knex from 'knex';
import Task from '../Models/Task';
import dateSQLParser from '../Helpers/dateSQLParser';

const env = require('../../.env');

class DBController {
      db = knex({
            client: 'mysql',
            connection: {
                  host: env.DB_HOST,
                  port: Number(env.DB_PORT || '3306'),
                  user: env.DB_USER,
                  password: env.DB_PASSWORD,
                  database: env.DB_NAME,
            },
      });

      async createUserInDB(user: User) {
            try {
                  await this.db('users').insert({
                        id: user.id,
                        name: user.name,
                        nickname: user.nickname,
                        email: user.email,
                  });
            } catch (error) {
                  throw 'Nickname ou email já existente';
            }
      }

      async getUserInDB(id: string) {
            try {
                  const request = await this.db('users')
                        .select('name', 'email', 'nickname')
                        .where({ id: id });

                  return {
                        name: request[0].name,
                        email: request[0].email,
                        nickname: request[0].nickname,
                  };
            } catch (error) {
                  throw 'Usuário inexistente ou id inválido';
            }
      }

      async editUser(id: string, name: string, nickname: string) {
            try {
                  await this.db('users')
                        .update({ name: name, nickname: nickname })
                        .where({ id: id });
            } catch (error) {
                  throw 'Usuário inexistente ou id inválido';
            }
      }

      async createTask(task: Task) {
            try {
                  await this.getUserInDB(task.creator);
                  await this.db('todolist').insert({
                        id: task.id,
                        title: task.title,
                        description: task.description,
                        creator: task.creator,
                        deadline_date: dateSQLParser(task.deadline_date),
                  });
            } catch (error) {
                  throw error;
            }
      }

      async getTaskInDB(id: string) {
            try {
                  const request = await this.db('todolist')
                        .select('*')
                        .where({ id: id });

                  return {
                        title: request[0].title,
                        description: request[0].description,
                        deadline_date: request[0].deadline_date,
                        status: request[0].status,
                        creator: request[0].creator,
                  };
            } catch (error) {
                  throw 'Tarefa inexistente ou id inválido';
            }
      }

      async getTaskInDBByQuery(query: string) {
            try {
                  const request = await this.db('todolist')
                        .select('*')
                        .where('title', 'like', `%${query}%`);

                  return request.map((item) => {
                        const task = {
                              task: {
                                    title: item.title,
                                    description: item.description,
                                    deadline_date: item.deadline_date,
                                    creator: item.creator,
                                    status: item.status,
                              },
                        };
                        return task;
                  });
            } catch (error) {
                  throw 'Houve um erro na busca';
            }
      }

      async getUserInDBByQuery(query: string) {
            try {
                  const request = await this.db('users')
                        .select('*')
                        .where('nickname', 'like', `%${query}%`);

                  return request.map((item) => {
                        const user = {
                              user: {
                                    name: item.name,
                                    nickname: item.nickname,
                                    email: item.email,
                              },
                        };
                        return user;
                  });
            } catch (error) {
                  throw 'Houve um erro na busca';
            }
      }

      async deleteTaskinDB(id: string) {
            try {
                  await this.getTaskInDB(id);
                  await this.db('todolist').delete().where({ id: id });
            } catch (error) {
                  throw 'Tarefa inexistente ou id inválido';
            }
      }

      async deleteUserInDB(id: string) {
            try {
                  await this.getUserInDB(id);
                  await this.db('users').delete().where({ id: id });
            } catch (error) {
                  throw 'Usuário inexistente ou id inválido';
            }
      }

      async getAllTasks() {
            try {
                  const request = await this.db('todolist').select('*');

                  return request.map((item) => {
                        const task = {
                              task: {
                                    title: item.title,
                                    description: item.description,
                                    deadline_date: item.deadline_date,
                                    creator: item.creator,
                                    status: item.status,
                              },
                        };
                        return task;
                  });
            } catch (error) {
                  throw 'Houve um erro na busca';
            }
      }

      async getAllTasksFromUser(id: string) {
            try {
                  const request = await this.db('todolist')
                        .select('*')
                        .where({ creator: id });

                  return request.map((item) => {
                        const task = {
                              task: {
                                    title: item.title,
                                    description: item.description,
                                    deadline_date: item.deadline_date,
                                    creator: item.creator,
                                    status: item.status,
                              },
                        };
                        return task;
                  });
            } catch (error) {
                  throw 'Houve um erro na busca';
            }
      }

      async getAllUsers() {
            try {
                  const request = await this.db('users').select('*');

                  return request.map((item) => {
                        const user = {
                              user: {
                                    id: item.id,
                                    name: item.name,
                                    nickname: item.nickname,
                                    email: item.email,
                              },
                        };
                        return user;
                  });
            } catch (error) {
                  throw 'Houve um erro na busca';
            }
      }
}

export default new DBController();
