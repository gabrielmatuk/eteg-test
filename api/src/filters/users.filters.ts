import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import CustomError from '@errors/custom-error';

export const createUserFilter = (error: PrismaClientKnownRequestError) => {
  if (!(error.code === 'P2002') || !error.meta) {
    throw new CustomError({
      status: 500,
      message: 'Erro on create User',
    });
  }
  const meta = error.meta as { target: string[] };

  if (meta.target.length > 0) {
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
  }

  throw new CustomError({
    status: 500,
    message: 'Erro on create User',
  })
}

