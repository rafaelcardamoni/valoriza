import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories';

class ListReceivedComplimentsService {
  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories);

    const compliments = complimentsRepository.find({
      where: {
        user_receiver: user_id
      },
      relations: ['userSender', 'userReceiver', 'tag']
    });

    return compliments;
  }
}

export { ListReceivedComplimentsService };
