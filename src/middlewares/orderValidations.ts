import { NextFunction, Request, Response } from 'express';
import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import { validateProductsIds } from './validations/inputsValidations';

const checkNewOrderProperties = (req: Request, res: Response, next: NextFunction) => {
  const { isError, message } = validateProductsIds(req.body);
  if (!isError) {
    return next();
  }
  if (message?.includes('required')) {
    throw new BadRequestError(message);
  }

  throw new UnprocessableEntityError(message);
};

export default { checkNewOrderProperties };