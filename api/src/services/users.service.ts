import { PrismaClient, Prisma } from '@prisma/client';

import CustomError from '@errors/custom-error';
import { createUserFilter } from '@src/filters/users.filters';

const prisma = new PrismaClient();

const findUsers = async () => {
  return prisma.user.findMany() || [];
};

const createUserInDatabase = async (
  name: string,
  email: string,
  cpf: string,
  color: string,
  observations?: string,
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        cpf,
        color,
        observations,
      },
    });

    return user;
  } catch (error: unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError)
      createUserFilter(error);
    console.log(JSON.stringify(error));
    throw new CustomError(500, 'Erro on create User');
  }
};
const updateUserInDatabase = async (
  id: number,
  name: string,
  email: string,
  cpf: string,
  color: string,
  observations?: string,
) => {
  return prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      cpf,
      color,
      observations,
    },
  });
};

const deleteUserInDatabase = async (id: number) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};

export default {
  findUsers,
  createUserInDatabase,
  updateUserInDatabase,
  deleteUserInDatabase,
};
