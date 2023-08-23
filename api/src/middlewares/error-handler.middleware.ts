import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

import CustomError from '@errors/custom-error';

export const errorHandler = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  /* eslint-disable-next-line */
  _next: NextFunction,
) => {
  if (err instanceof CustomError) {
    const error = {
      error: {
        message: err.message,
      },
    };
    // Error on console -> console.log(error)
    return res.status(err.status).json(error);
  }
  return res.status(500).json({ error: 'Internal Server Error' });
};
