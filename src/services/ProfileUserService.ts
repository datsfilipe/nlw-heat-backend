import prismaClient from '../prisma'

class ProfileUserService {
  async execute(id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id
      },
      include: {
        messages: true
      }
    })

    return user
  }
}

export { ProfileUserService }