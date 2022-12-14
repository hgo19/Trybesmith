import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces';
import createToken from './auth/jwtGenerate';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<string> => {
    const createdUser = await this.model.create(user);
    // if (!createdUser) return 'ERRO';
    const { id, username } = createdUser;
    const token = createToken({ id, username });
    return token;
  };

  public findByUserName = async (username: string) => {
    const userInDB = await this.model.findByUsername(username);
    return userInDB;
  };
}