
import { Request, Response } from 'express'

import { GetLoggedUserDataService } from '../services/GetLoggedUserDataService'

class GetLoggedUserDataController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const service = new GetLoggedUserDataService()

    const result = await service.execute(user_id)

    return response.json(result)
  }
}

export { GetLoggedUserDataController }