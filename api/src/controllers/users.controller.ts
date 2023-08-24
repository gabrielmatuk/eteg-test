import { Request, Response, NextFunction } from 'express';

import validators from '@validators';
import CustomError from '@errors/custom-error';
import UserServices from '@services/users.service';

const showAllUsers = async (_: Request, res: Response) => {
  const users = await UserServices.listAllUsers();
  console.log(users)
  res.status(200).json(users);
};

const createUser = async (req: Request, res: Response) => {
  console.log(req.body);
  const { name, email, cpf, color } = req.body;

  if (!validators.CPFValidation(cpf))
    throw new CustomError({ status: 400, message: 'CPF inválido' });
  if (!validators.emailValidation(email))
    throw new CustomError({ status: 400, message: 'Email inválido' });

  if (!name || !email || !cpf || !color) {
    throw new CustomError({
      status: 400,
      message: 'Os campos name, email, cpf, color são obrigatórios.',
    });
  }

  if (!req.body.observations) req.body.observations = null;
  const user = await UserServices.createUserInDatabase(
    name,
    email,
    cpf,
    color,
    req.body.observations,
  );
  res.status(201).json(user);
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, cpf, color } = req.body;
  if (!name || !email || !cpf || !color) {
    throw new CustomError({
      status: 400,
      message: 'Os campos name, email, cpf, color são obrigatórios.',
    });
  }

  if (!id)
    throw new CustomError({
      status: 400,
      message: 'O campo id é obrigatório.',
    });

  if (typeof id !== 'string')
    throw new CustomError({
      status: 400,
      message: 'O campo id deve ser um número.',
    });

  const user = await UserServices.updateUserInDatabase(
    +id,
    name,
    email,
    cpf,
    color,
    req.body.observations,
  );
  res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id)
    throw new CustomError({
      status: 400,
      message: 'O campo id é obrigatório.',
    });

  await UserServices.deleteUserInDatabase(+id);
  res.status(204);
};

export default { showAllUsers, createUser, updateUser, deleteUser };
