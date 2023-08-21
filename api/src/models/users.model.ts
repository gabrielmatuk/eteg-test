import { PrismaClient } from '@prisma/client'
import CustomError from '../errors/custom-error'

const prisma = new PrismaClient()

const listAllUsers = async () => {
  try {
    const user = prisma.user.findMany()
    return user
  } catch (error) {
    console.log(JSON.stringify(error))
    throw new CustomError(404, 'Error  to list all users')
  }
}

const createUserInDatabase = async (name: string, email: string, cpf: string, color: string, observations?: string) => {
  const contentForCreateUser = {
    name,
    email,
    cpf,
    color,
    observations
  }

  if (observations) contentForCreateUser['observations'] = observations

  try {
    const user = prisma.user.create({
      data: contentForCreateUser
    })
    return user
  } catch (error) {
    console.log(JSON.stringify(error))
    throw new CustomError(502, 'Error to create user')
  }
}

const updateUserInDatabase = async (id: number, name: string, email: string, cpf: string, color: string, observations?: string) => {
  const contentForUpdateUser = {
    name,
    email,
    cpf,
    color,
    observations
  }

  if (observations) contentForUpdateUser['observations'] = observations

  try {
    const user = prisma.user.update({
      where: {
        id
      },
      data: contentForUpdateUser
    })
    return user
  } catch (error) {
    console.log(JSON.stringify(error))
    throw new CustomError(500, 'Error to update User with id: ' + id)
  }
}

const deleteUserInDatabase = async (id: number) => {
  try {
    const user = prisma.user.delete({
      where: {
        id
      }
    })
    return user
  } catch (error) {
    console.log(JSON.stringify(error))
    throw new CustomError(500, 'Error to delete User with id: ' + id)
  }
}

export default { listAllUsers, createUserInDatabase, updateUserInDatabase, deleteUserInDatabase }