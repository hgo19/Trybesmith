export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Order {
  id?: number;
  userId: number;
  productsIds: number[];
}

export type UserLogin = {
  username: string,
  password: string,
};

export interface UpdateProducts {
  productsIds: number[],
  orderId: number,
}

export interface CreateOrder {
  token: string,
  productsIds: number[],
}