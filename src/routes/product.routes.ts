import { Router } from 'express';
import ProductController from '../controllers/product.controllers';

const router = Router();

const productsController = new ProductController();

router.post('/', productsController.create);

export default router;