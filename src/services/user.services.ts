import connection from '../db/models/connection';
import UserModel from '../db/models/user.model';
import User from '../interfaces/user.interface';
import createToken from './auth/jwtGenerate';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<string> => {
    const createdUser = await this.model.create(user);
    if (!createdUser) return 'ERRO';
    const { id, username, vocation } = createdUser;
    const token = createToken({ id, username, vocation });
    return token;
  };
}