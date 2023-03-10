import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  public getById = async (id: number): Promise<Order> => {
    const query = `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    WHERE o.id = ?
    group by o.id;`;

    const [[row]] = await this.connection.execute<RowDataPacket[][] & Order[]>(query, [id]);
    return row;
  };

  public create = async (userId: number): Promise<number> => {
    const query = `INSERT INTO Trybesmith.orders (user_id)
    VALUES (?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [userId]);

    return insertId;
  };
}