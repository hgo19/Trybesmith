import Joi from 'joi';

const usernameSchema = Joi.string().empty().min(3).required()
  .messages({
    'any.required': '"username" is required',
    'string.empty': '"username" is required',
    'string.min': '"username" length must be at least 3 characters long',
  });

const passwordSchema = Joi.string().empty().min(8).required()
  .messages({
    'any.required': '"password" is required',
    'string.empty': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
  });

const vocationSchema = Joi.string().empty().min(3).required()
  .messages({
    'any.required': '"vocation" is required',
    'string.empty': '"vocation" is required',
    'string.min': '"vocation" length must be at least 3 characters long',
  });

const levelSchema = Joi.number().min(1).required()
  .messages({
    'any.required': '"level" is required',
    'number.min': '"level" must be greater than or equal to 1',
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

export const newUserSchema = Joi.object({
  username: usernameSchema,
  vocation: vocationSchema,
  level: levelSchema,
  password: passwordSchema,
}).required();

export const tokenSchema = Joi.string().min(1).required().messages({
  'any.required': 'Token not found',
  'string.empty': 'Token not found',
});

export const productsIdsSchema = Joi.array().items(Joi.number().min(1).required().messages({
  'number.base': '"productsIds" must include only numbers',
})).min(0).required()
  .messages({
    'array.base': '"productsIds" must be an array',
    'any.required': '"productsIds" is required',
    'array.includesRequiredUnknowns': '"productsIds" must include only numbers',
  });