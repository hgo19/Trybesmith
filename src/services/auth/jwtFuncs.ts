import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UnauthorizedError } from 'restify-errors';

dotenv.config();

const secret = process.env.JWT_SECRET || 'suasenha';

type TUser = {
  id?: number,
  username: string,
};

export const createToken = (user: TUser): string => {
  const token = jwt.sign({ data: user }, secret, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token;
};

export const decodedToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded.data;
  } catch (error) {
    console.log(error);
    throw new UnauthorizedError('Invalid token');
  }
};
