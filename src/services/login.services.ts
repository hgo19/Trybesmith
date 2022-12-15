import { UnauthorizedError } from 'restify-errors';
import UserService from './user.services';
import { createToken } from './auth/jwtFuncs';
import { UserLogin } from '../interfaces';

const userOrPassInvalid = 'Username or password invalid';

export default class LoginService {
  constructor(private userService = new UserService()) { }

  public async login(userLogin: UserLogin) {
    const { username, password: loginPass } = userLogin;
    const isUserInDB = await this.userService.findByUserName(username);
    
    if (!isUserInDB) {
      console.log('usuário nao está no DB.');
      throw new UnauthorizedError(userOrPassInvalid);
    }

    const { id, password } = isUserInDB;
    
    if (password !== loginPass) {
      console.log('senha não condiz com senha do usuário.');
      throw new UnauthorizedError(userOrPassInvalid);
    }

    return createToken({ id, username });
  }
}