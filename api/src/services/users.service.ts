import { PrismaClient, Prisma } from '@prisma/client';

import CustomError from '@errors/custom-error';

const prisma = new PrismaClient();

const listAllUsers = async () => {
  const user = prisma.user.findMany();
  if (!user) return [];
  return user;
};

const createUserInDatabase = async (
  name: string,
  email: string,
  cpf: string,
  color: string,
  observations?: string,
) => {
  const contentForCreateUser = {
    name,
    email,
    cpf,
    color,
    observations,
  };

  if (observations) contentForCreateUser.observations = observations;

  try {
    const user = await prisma.user.create({
      data: contentForCreateUser,
    });
    return user;
    /* eslint-disable-next-line */
  } catch (error: unknown) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === 'P2002'
    ) {
      if (error.meta) {
        const meta = error.meta;

        if (Array.isArray(meta.target) && meta.target.length > 0) {
          const target: unknown = meta.target[0];
          if (target === 'cpf') {
            throw new CustomError({
              code: 'CPF_ALREADY_EXISTS',
              status: 400,
              message: 'CPF já cadastrado',
            });
          }
          if (target === 'email') {
            throw new CustomError({
              code: 'EMAIL_ALREADY_EXISTS',
              status: 400,
              message: 'Email já cadastrado',
            });
          }
        } else {
          console.log(JSON.stringify(error));
          throw new CustomError({ status: 500, message: 'Erro on create User - meta empty' });
        }
      }

    }
    console.log(JSON.stringify(error));

    throw new CustomError({ status: 500, message: 'Erro on create User' });

  };
}
const updateUserInDatabase = async (
  id: number,
  name: string,
  email: string,
  cpf: string,
  color: string,
  observations?: string,
) => {
  const contentForUpdateUser = {
    name,
    email,
    cpf,
    color,
    observations,
  };

  if (observations) contentForUpdateUser.observations = observations;

  try {
    const user = prisma.user.update({
      where: {
        id,
      },
      data: contentForUpdateUser,
    });
    return user;
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new CustomError({
      status: 500,
      message: `Error to update User with id: ${id}`,
    });
  }
};

const deleteUserInDatabase = async (id: number) => {
  try {
    const user = prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  } catch (error) {
    console.log(JSON.stringify(error));
    throw new CustomError({
      status: 500,
      message: `Error to delete User with id: ${id}`,
    });
  }
};

export default {
  listAllUsers,
  createUserInDatabase,
  updateUserInDatabase,
  deleteUserInDatabase,
};
