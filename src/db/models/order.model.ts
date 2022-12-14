import { Pool, RowDataPacket } from 'mysql2/promise';
import { Order } from '../../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Order[]> => {
    const query = 'SELECT * FROM Trybesmith.orders';
    const [rows] = await this.connection.execute<RowDataPacket[] & Order[]>(query);
    return rows;
  };
}