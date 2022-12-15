import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import loginValidations from '../middlewares/loginValidations';

const router = Router();

const loginController = new LoginController();

router.post('/', loginValidations.checkLoginProperties, loginController.login);

export default router;