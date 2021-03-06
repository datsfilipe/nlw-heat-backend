import prismaClient from '../prisma'
import { io } from '../app'

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id
      },
      include: {
        user: true
      }
    })

    const infoWS = {
      id: message.id,
      text: message.text,      
      created_at: message.created_at,
      user: {
        login: message.user.login,
        name: message.user.name,
        description: message.user.description,
        avatar_url: message.user.avatar_url
      }
    }

    io.emit('new_message', infoWS)

    return message
  }
}

export { CreateMessageService }