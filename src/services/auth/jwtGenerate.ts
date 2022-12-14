import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'suasenha';

type TUser = {
  id?: number,
  username: string,
  vocation: string,
};

const createToken = (user: TUser): string => {
  const token = jwt.sign({ data: user }, secret, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;