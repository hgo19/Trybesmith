import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  };

  public getAll = async (): Promise<Product[]> => {
    const products = await this.model.getAll();
    return products;
  };
}