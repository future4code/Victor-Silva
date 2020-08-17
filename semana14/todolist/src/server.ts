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

            this.app.route('/api/user/:id').get(RoutesController.getUser);
            this.app.route('/api/user/:id').patch(RoutesController.editUser);

            this.app.route('/api/task/search').get(RoutesController.searchTask);
            
            this.app.route('/api/task/:id').get(RoutesController.getTaskById);
            this.app.route('/api/task/:id').delete(RoutesController.deleteTask);
      }
}

export default new Server();
