import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { Order } from '../interfaces';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.model.getAll();
    return orders;
  };
}