import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { CreateOrder, Order } from '../interfaces';
import { decodedToken } from './auth/jwtFuncs';
import ProductModel from '../models/product.model';

export default class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public getAll = async (): Promise<Order[]> => {
    const orders = await this.orderModel.getAll();
    return orders;
  };

  public create = async ({ token, productsIds }: CreateOrder) => {
    if (token) {
      const { id } = decodedToken(token);
      const insertedId = await this.orderModel.create(id);

      await this.productModel.update({ productsIds, orderId: insertedId });
  
      const orderInDB = await this.orderModel.getById(insertedId);
  
      return {
        userId: orderInDB.userId,
        productsIds: orderInDB.productsIds,
      };
    }
  };
}