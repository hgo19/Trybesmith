import Joi from 'joi';

export const usernameSchema = Joi.string().empty().required().messages({
  'any.required': '"username" is required',
  'string.empty': '"username" is required',
});

export const passwordSchema = Joi.string().empty().required().messages({
  'any.required': '"password" is required',
  'string.empty': '"password" is required',
});

export const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
}).required();