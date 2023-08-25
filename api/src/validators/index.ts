import * as yup from 'yup';
import { Request } from 'express';

import { REGEX_CPF } from '@constants';
import CustomError from '@src/errors/custom-error';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const errorHandler = (err: any) => {
  const errors: Record<string, string> = {};
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  err.inner.forEach((error: any) => {
    errors[error.path] = error.message;
  });
  throw new CustomError(400, errors);
};

const schema = yup.object({
  name: yup
    .string()
    .required('O campo name é obrigatório.')
    .typeError('O campo name deve ser uma string.'),
  email: yup
    .string()
    .email('O campo email deve ser um email válido.')
    .required('O campo email é obrigatório.'),
  cpf: yup.string().matches(REGEX_CPF).required('O campo cpf é obrigatório.'),
  color: yup.string().required('O campo color é obrigatório.'),
  observations: yup.string().optional(),
});

export const userCreateValidator = async (req: Request) => {
  return schema.validate(req.body, { abortEarly: false }).catch(errorHandler);
};

export const userUpdateValidator = async (req: Request) => {
  const updateSchema = yup
    .object({
      id: yup
        .number()
        .required('O campo id é obrigatório.')
        .typeError('O campo id deve ser um número.'),
    })
    .concat(schema);
  const { body, params } = req;
  return updateSchema
    .validate({ ...body, id: params.id }, { abortEarly: false })
    .catch(errorHandler);
};

export const userDeleteValidator = async (req: Request) => {
  const deleteSchema = yup.object({
    id: yup
      .number()
      .required('O campo id é obrigatório.')
      .typeError('O campo id deve ser um número.'),
  });
  return deleteSchema
    .validate(req.params, { abortEarly: false })
    .catch(errorHandler);
};
