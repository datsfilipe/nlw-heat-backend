import { Request, Response } from 'express'

import { ProfileUserService } from '../services/ProfileUserService'

class ProfileUserController {
  async handle(request: Request, response: Response) {
    const { login } = request.params

    const service = new ProfileUserService()

    const result = await service.execute(login)

    return response.json(result)
  }
}

export { ProfileUserController }