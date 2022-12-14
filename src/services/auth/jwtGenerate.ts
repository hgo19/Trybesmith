import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET || 'suasenha';

const createToken = (username: string, vocation: string): string => {
  const token = jwt.sign({ data: { username, vocation } }, secret, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });

  return token;
};

export default createToken;