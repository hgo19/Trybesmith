import { loginSchema, newProductSchema } from './schema';
import { UserLogin, Product } from '../../interfaces';
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
    console.log(error);
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};