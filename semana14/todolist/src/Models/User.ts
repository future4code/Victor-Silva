import { v4 } from 'uuid';

class User {
      id: string;

      constructor(
            public name: string,
            public nickname: string,
            public email: string
      ) {
            this.id = v4();

            return this;
      }
}

export default User;
