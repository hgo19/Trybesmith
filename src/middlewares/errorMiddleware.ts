import { NextFunction, Request, Response } from 'express';
import { DefinedHttpError } from 'restify-errors';

const errorMiddleware = (
  error: DefinedHttpError, 
  req: Request, 
  res: Response, 
  _next: NextFunction,
) => {
  console.log(error);
  const { message } = error;
  if (!error.statusCode) {
    return res.status(500).json({ message });
  }
  res.status(error.statusCode).json({ message });
};

export default errorMiddleware;