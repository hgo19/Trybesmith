import connection from '../db/models/connection';
import UserModel from '../db/models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: User): Promise<User> => {
    const createdUser = await this.model.create(user);
    return createdUser;
  };
}