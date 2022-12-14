import { Router } from 'express';
import UserController from '../controllers/user.controllers';

const router = Router();

const usersController = new UserController();

router.post('/', usersController.create);

export default router;