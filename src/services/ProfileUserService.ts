import prismaClient from '../prisma'

class ProfileUserService {
  async execute(login: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        login: login
      },
      include: {
        messages: true
      }
    })

    return user
  }
}

export { ProfileUserService }