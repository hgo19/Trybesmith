import { Request, Response } from 'express';
import LoginService from '../services/login.services';

export default class LoginController {
  constructor(private loginServices = new LoginService()) {}

  public login = async (req: Request, res: Response) => {
    const { username } = req.body;
    const token = await this.loginServices.login(username);
    res.status(200).json({ token });
  };
}