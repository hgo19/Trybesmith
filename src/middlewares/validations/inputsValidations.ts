import { loginSchema, newProductSchema, newUserSchema } from './schema';
import { UserLogin, Product, User } from '../../interfaces';
// type validationReturn = {
//   isError: boolean,
//   error?: Joi.ValidationError
// };
// PERGUNTAR SOBRE ISSO

export const validateLogin = (userLogin: UserLogin) => {
  const { error } = loginSchema.validate(userLogin);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateNewProduct = (newProduct: Product) => {
  const { error } = newProductSchema.validate(newProduct);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export const validateNewUser = (newUser: User) => {
  const { error } = newUserSchema.validate(newUser);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};