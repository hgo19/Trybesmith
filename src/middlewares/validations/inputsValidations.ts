import { loginSchema, newProductSchema, newUserSchema } from './schema';
import { UserLogin, Product, User } from '../../interfaces';

type ValidationReturn = {
  isError: boolean,
  message?: string
};

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