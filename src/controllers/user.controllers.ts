import { Request, Response } from 'express';
import UserService from '../services/user.services';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const createdUserToken = await this.userService.create(user);
    res.status(201).json(createdUserToken);
  };
}