import { Request, Response } from 'express';
import ProductService from '../services/product.services';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    const createdProduct = await this.productService.create(product);
    res.status(201).json(createdProduct);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };
}