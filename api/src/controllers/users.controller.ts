import { Request, Response, NextFunction } from 'express';

import UserServices from '@services/users.service';
import { userCreateValidator, userUpdateValidator, userDeleteValidator } from '@src/validators';

const find = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserServices.findUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, cpf, color, observations } = await userCreateValidator(req);

    const user = await UserServices.createUserInDatabase(
      name,
      email,
      cpf,
      color,
      observations,
    );
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const { name, email, cpf, color, observations, id } = await userUpdateValidator(req);
    const user = await UserServices.updateUserInDatabase(
      id,
      name,
      email,
      cpf,
      color,
      observations
    );
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = await userDeleteValidator(req);
    await UserServices.deleteUserInDatabase(id);
    res.status(204);
  } catch (err) {
    next(err)
  }

};

export default { find, createUser, updateUser, deleteUser };
