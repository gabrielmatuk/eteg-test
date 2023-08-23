import { Request, Response } from 'express';

import CustomError from '@errors/custom-error';

export const errorHandler = (err: CustomError, _: Request, res: Response) => {
  return res.status(err.status || 502).json({ error: err.message });
};
