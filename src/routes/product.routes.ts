import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

const router = Router();

const productsController = new ProductController();

router.post('/', productsController.create);
router.get('/', productsController.getAll);

export default router;