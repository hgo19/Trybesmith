import { loginSchema,
  newProductSchema, newUserSchema, productsIdsSchema, tokenSchema } from './schema';
import { UserLogin, Product, User } from '../../interfaces';

type ValidationReturn = {
  isError: boolean,
  message?: string
};

interface NewOrder {
  productsIds: number[]
}

export const validateLogin = (userLogin: UserLogin): ValidationReturn => {
  const { error } = loginSchema.validate(userLogin);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateNewProduct = (newProduct: Product): ValidationReturn => {
  const { error } = newProductSchema.validate(newProduct);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateNewUser = (newUser: User): ValidationReturn => {
  const { error } = newUserSchema.validate(newUser);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateToken = (token: string): ValidationReturn => {
  const { error } = tokenSchema.validate(token);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateProductsIds = ({ productsIds }: NewOrder): ValidationReturn => {
  const { error } = productsIdsSchema.validate(productsIds);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};