import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import tokenValidations from '../middlewares/tokenValidations';

const router = Router();

const ordersController = new OrderController();

router.get('/', ordersController.getAll);
router.post('/', tokenValidations.checkTokenProperty, ordersController.create);

export default router;