import UserService from './user.services';
import createToken from './auth/jwtGenerate';

export default class LoginService {
  constructor(private userService = new UserService()) { }

  public login = async (username: string) => {
    const isUserInDB = await this.userService.findByUserName(username);
    const { id } = isUserInDB;
    const token = createToken({ id, username });

    return token;
  };
}