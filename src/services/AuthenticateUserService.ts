import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from 'jsonwebtoken';
import 'dotenv/config';

interface Authenticate {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: Authenticate) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error('Email/Password is incorrect');
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Email/Password is incorrect');
    }

    const token = sign(
      {
        email: user.email
      },
      process.env.SECRET_KEY,
      {
        subject: user.id,
        expiresIn: '1d'
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
