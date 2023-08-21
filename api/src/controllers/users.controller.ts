import { NextFunction, Request, Response } from 'express'
import CustomError from '../errors/custom-error'
import UserServices from '../services/users.service'

const showAllUsers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.listAllUsers()
    res.status(200).json(users)
  } catch (error: any) {
    next(new CustomError(error.statusCode, error.message))
  }
}

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    const { name, email, cpf, color } = req.body
    if (!name || !email || !cpf || !color) {
      throw new CustomError(400, 'Os campos name, email, cpf e color são obrigatórios.');
    }

    if (!req.body['observations']) req.body['observations'] = null

    const user = await UserServices.createUserInDatabase(name, email, cpf, color, req.body['observations'])
    res.status(201).json(user)
  } catch (error: any) {
    next(new CustomError(error.statusCode, error.message))
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { name, email, cpf, color } = req.body
    if (!name || !email || !cpf || !color) {
      throw new CustomError(400, 'Os campos name, email, cpf, color são obrigatórios.');
    }

    if (!id) throw new CustomError(400, 'O campo id é um paramêtro obrigatório.')

    if (typeof id !== 'string') throw new CustomError(400, 'O campo id deve ser um número.')

    const user = await UserServices.updateUserInDatabase(+id, name, email, cpf, color, req.body['observations'])
    res.status(200).json(user)
  } catch (error: any) {
    next(new CustomError(error.statusCode, error.message))
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    if (!id) throw new CustomError(400, 'O campo id é um paramêtro obrigatório.')

    const user = await UserServices.deleteUserInDatabase(+id)
    res.status(200).json(user)
  } catch (error: any) {
    next(new CustomError(error.statusCode, error.message))
  }
}

export default { showAllUsers, createUser, updateUser, deleteUser }