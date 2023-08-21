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

export default { showAllUsers }