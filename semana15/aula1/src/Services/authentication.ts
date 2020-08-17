import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
class Authenticator {
      private static EXPIRES_IN = '10min';

      public generateToken(input: string): string {
            try {
                  const token = jwt.sign(
                        {
                              id: input,
                        },
                        process.env.JWT_KEY as string,
                        {
                              expiresIn: Authenticator.EXPIRES_IN,
                        }
                  );
                  return token;
            } catch (error) {
                  throw `Autenticação inválida`;
            }
      }

      public getData(token: any): string {
            try {
                  const payload = jwt.verify(
                        token,
                        process.env.JWT_KEY as string
                  ) as any;
                  const result = payload.id;

                  return result;
            } catch (error) {
                  throw `Autenticação inválida`;
            }
      }
}

export default new Authenticator();
