import { Request, Response } from 'express';

import CustomError from '@errors/custom-error';

export const errorHandler = (err: CustomError, _: Request, res: Response) => {
  res.status(err.status || 500).json({ error: err.message });
};
