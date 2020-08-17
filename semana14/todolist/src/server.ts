import express from 'express';
import RoutesController from './Controllers/RoutesController';

class Server {
      public app: express.Application;

      constructor() {
            this.app = express();
            this.routes();
      }

      routes() {
            this.app.use(express.json());
            this.app.route('/').get((_, res) => {
                  res.json({ API: 'Created by Victor Gutierrez' });
            });
            this.app
                  .route('/api/create/user')
                  .post(RoutesController.createUser);
            this.app
                  .route('/api/create/task')
                  .post(RoutesController.createTask);

            this.app.route('/api/users').get(RoutesController.getAllUsers);
            this.app.route('/api/tasks').get(RoutesController.getAllTasks);

            this.app
                  .route('/api/tasks/search')
                  .get(RoutesController.searchTask);
            this.app
                  .route('/api/users/search')
                  .get(RoutesController.searchUser);

            this.app.route('/api/user/:id').get(RoutesController.getUser);
            this.app.route('/api/user/:id').patch(RoutesController.editUser);
            this.app.route('/api/user/:id').delete(RoutesController.deleteUser);

            this.app.route('/api/task/:id').get(RoutesController.getTaskById);
            this.app.route('/api/task/:id').delete(RoutesController.deleteTask);
      }
}

export default new Server();
