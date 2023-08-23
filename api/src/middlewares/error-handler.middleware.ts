import { Request, Response, NextFunction } from 'express';

import CustomError from '@errors/custom-error';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.status || 500).json({ error: err.message });
  }
  return res.status(500).json({ error: 'Internal Server Error' });
};