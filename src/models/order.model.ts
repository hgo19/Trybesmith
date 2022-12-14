import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const query = `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    group by o.id;`;
    const [rows] = await this.connection.execute<RowDataPacket[] & Order[]>(query);
    return rows;
  };
}