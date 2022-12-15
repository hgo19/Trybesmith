import { NextFunction, Request, Response } from 'express';
import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import { validateNewProduct } from './validations/inputsValidations';

const checkNewProductProperties = (req: Request, res: Response, next: NextFunction) => {
  const { isError, message } = validateNewProduct(req.body);
  if (!isError) {
    return next();
  }
  if (message?.includes('required')) {
    throw new BadRequestError(message);
  }

  throw new UnprocessableEntityError(message);
};

export default { checkNewProductProperties };