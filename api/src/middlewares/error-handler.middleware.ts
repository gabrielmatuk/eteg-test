import { Request, Response, NextFunction } from 'express';
import CustomError from "@errors/custom-error";

export const errorHandler = (err: CustomError, _: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({ error: err.message });
}
