import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<User> => {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);

    return {
      id: insertId,
      ...user,
    };
  };

  public findByUsername = async (username: string): Promise<User> => {
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
    const [[row]] = await this.connection.execute<RowDataPacket[][] & User[]>(query, [username]);

    return row;
  };
}