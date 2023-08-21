import { PrismaClient } from '@prisma/client'
import CustomError from '../errors/custom-error'

const prisma = new PrismaClient()

const listAllUsers = async () => {
  try {
    const user = prisma.user.findMany()
    return user
  } catch (error) {
    throw new CustomError(404, 'Error  to list all users')
  }
}


export default { listAllUsers }