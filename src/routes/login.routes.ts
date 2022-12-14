import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/loginValidations';

const router = Router();

const loginController = new LoginController();

router.post('/', loginMiddleware.checkLoginProperties, loginController.login);

export default router;