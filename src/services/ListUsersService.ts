import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

class ListUsersService {
  async execute() {
    const userRepository = getCustomRepository(UsersRepositories);

    const users = await userRepository.find();

    return users;
  }
}

export { ListUsersService };
