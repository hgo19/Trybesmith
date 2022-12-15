import { NextFunction, Request, Response } from 'express';
import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import { validateNewUser } from './validations/inputsValidations';

const checkNewUserProperties = (req: Request, _res: Response, next: NextFunction) => {
  const { isError, message } = validateNewUser(req.body);
  if (!isError) {
    return next();
  }
  if (message?.includes('required')) {
    throw new BadRequestError(message);
  }

  throw new UnprocessableEntityError(message);
};

export default { checkNewUserProperties };