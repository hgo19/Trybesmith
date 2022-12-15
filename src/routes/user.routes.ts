import { Router } from 'express';
import UserController from '../controllers/user.controllers';
import userValidations from '../middlewares/userValidations';

const router = Router();

const usersController = new UserController();

router.post('/', userValidations.checkNewUserProperties, usersController.create);

export default router;