import { Request, Response } from 'express'

import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const service = new ProfileUserService()

    const result = await service.execute(id)

    return response.json(result)
  }
}

export { ProfileUserController }