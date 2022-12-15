import { Router } from 'express';
import ProductController from '../controllers/product.controllers';
import productValidations from '../middlewares/productValidations';

const router = Router();

const productsController = new ProductController();

router.post('/', productValidations.checkNewProductProperties, productsController.create);
router.get('/', productsController.getAll);

export default router;