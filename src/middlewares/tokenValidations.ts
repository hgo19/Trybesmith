import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'restify-errors';
import { validateToken } from './validations/inputsValidations';

const checkTokenProperty = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (token) {
    const { isError, message } = validateToken(token);
    if (!isError) {
      next();
    } else {
      throw new UnauthorizedError(message);
    }
  } else {
    throw new UnauthorizedError('Token not found');
  }
};

export default { checkTokenProperty };