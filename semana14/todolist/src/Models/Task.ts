import { v4 } from 'uuid';

class Task {
      id: string;

      constructor(
            public title: string,
            public description: string,
            public deadline_date: string,
            public creator: string
      ) {
            this.id = v4();

            return this;
      }
}

export default Task;
