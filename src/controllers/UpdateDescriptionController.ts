import { Request, Response } from 'express'

import { UpdateDescriptionService } from '../services/UpdateDescriptionService'

class UpdateDescriptionController {
  async handle(request: Request, response: Response) {
    const { description } = request.body
    const { user_id } = request

    const service = new UpdateDescriptionService()

    const result = await service.execute(description, user_id)

    return response.json(result)
  }
}

export { UpdateDescriptionController }