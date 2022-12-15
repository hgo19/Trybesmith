import { Request, Response } from 'express';
import OrderService from '../services/order.services';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    const token = req.header('Authorization');
    const { productsIds } = req.body;
    const newOrder = await this.orderService.create({ token, productsIds });
    res.status(201).json(newOrder);
  };
}