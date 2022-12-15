import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

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
    const decoded: any = jwt.verify(token, secret);
    return decoded.data;
  } catch (error) {
    console.log(error);
  }
};
