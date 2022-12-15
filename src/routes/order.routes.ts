import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import tokenValidations from '../middlewares/tokenValidations';
import orderValidations from '../middlewares/orderValidations';

const router = Router();

const ordersController = new OrderController();

router.get('/', ordersController.getAll);
router.post(
  '/',
  tokenValidations.checkTokenProperty,

  orderValidations.checkNewOrderProperties,

  ordersController.create,
);

export default router;