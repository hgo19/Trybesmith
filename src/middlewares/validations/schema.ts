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

const nameProductSchema = Joi.string().min(3).required().messages({
  'any.required': '"name" is required',
  'string.empty': '"name" is required',
  'string.min': '"name" length must be at least 3 characters long',
});

const amountProductSchema = Joi.string().min(3).required().messages({
  'any.required': '"amount" is required',
  'string.empty': '"amount" is required',
  'string.min': '"amount" length must be at least 3 characters long',
});

export const newProductSchema = Joi.object({
  name: nameProductSchema,
  amount: amountProductSchema,
}).required();