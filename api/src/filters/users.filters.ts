import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import CustomError from '@errors/custom-error';

export const createUserFilter = (error: PrismaClientKnownRequestError) => {
  if (!(error.code === 'P2002') || !error.meta) {
    throw new CustomError(500, 'Erro on create User');
  }
  const meta = error.meta as { target: string[] };

  if (meta.target.length > 0) {
    const target: unknown = meta.target[0];
    if (target === 'cpf') {
      throw new CustomError(400, 'CPF já cadastrado', 'CPF_ALREADY_EXISTS');
    }
    if (target === 'email') {
      throw new CustomError(400, 'Email já cadastrado', 'EMAIL_ALREADY_EXISTS');
    }
  }

  throw new CustomError(500, 'Erro on create User');
};
