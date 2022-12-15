import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from 'restify-errors';
import { validateToken } from './validations/inputsValidations';
import { decodedToken } from '../services/auth/jwtFuncs';

const checkTokenProperty = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (token) {
    const { isError, message } = validateToken(token);
    if (!isError) {
      return next();
    } 
    throw new UnauthorizedError(message);
  } else {
    throw new UnauthorizedError('Token not found');
  }
};

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (token) {
    decodedToken(token);
    return next();
  }
  throw new UnauthorizedError('Token not found');
};

export default { checkTokenProperty, verifyToken };