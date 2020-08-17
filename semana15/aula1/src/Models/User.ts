import { IUser } from '../Types/index';

class User implements IUser {
      constructor(
            public name: string,
            public email: string,
            public password: string
      ) {
            return this;
      }
}

export default User;
