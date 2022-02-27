import { Request, Response } from 'express';
import { ListSentComplimentsService } from '../services/ListSentComplimentsService';

class ListSentComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listSentCompliments = new ListSentComplimentsService();

    const compliments = await listSentCompliments.execute(user_id);

    return response.json(compliments);
  }
}

export { ListSentComplimentsController };
