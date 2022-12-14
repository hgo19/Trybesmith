import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from 'restify-errors';
import validateLogin from './validations/inputsValidations';

export const checkLoginProperties = (req: Request, res: Response, next: NextFunction) => {
  const { isError, message } = validateLogin(req.body);
  if (!isError) {
    return next();
  }
  throw new BadRequestError(message);
};

export const checkPassword = () => {};