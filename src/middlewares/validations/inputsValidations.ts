import { loginSchema } from './schema';
import { UserLogin } from '../../interfaces';

// type validationReturn = {
//   isError: boolean,
//   error?: Joi.ValidationError
// };
// PERGUNTAR SOBRE ISSO

const validateLogin = (userLogin: UserLogin) => {
  const { error } = loginSchema.validate(userLogin);
  if (error) {
    const { message } = error;
    return { isError: true, message };
  }

  return { isError: false };
};

export default validateLogin;