import connection from '../db/models/connection';
import ProductModel from '../db/models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public create = async (product: Product): Promise<Product> => {
    const createdProduct = await this.model.create(product);
    return createdProduct;
  };
}