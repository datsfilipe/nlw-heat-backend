import prismaClient from '../prisma'

class UpdateDescriptionService {
  async execute(text: string, user_id: string) {
    const description = await prismaClient.user.update({
      where: {
        id: user_id,
      },
      data: {
        description: text
      }
    })

    return description
  }
}

export { UpdateDescriptionService }