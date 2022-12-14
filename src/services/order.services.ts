import connection from '../db/models/connection';
import OrderModel from '../db/models/order.model';
import { Order } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const products = await this.model.getAll();
    return products;
  };
}