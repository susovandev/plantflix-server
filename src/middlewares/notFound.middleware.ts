// Types
import type { Request, Response, NextFunction } from 'express';

// Custom modules
import { NotFoundError } from '@libs/errors/notFoundError.js';

export const notFoundHandler = (req: Request, _res: Response, _next: NextFunction) => {
  _next(new NotFoundError(`Route Not Found - ${req.originalUrl}`));
};
