/* eslint-disable no-unused-vars */

// Custom modules
import { env } from '@config/env.js';
import Logger from '@config/logger.js';
import { normalizeError } from '@libs/errors/index.js';

// Types
import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const normalized = normalizeError(err);

  // Better logging
  if (env.NODE_ENV !== 'test') {
    Logger.error({
      method: req.method,
      url: req.originalUrl,
      statusCode: normalized.statusCode,
      message: normalized.message,
      stack: err instanceof Error ? err.stack : undefined,
    });
  }

  res.status(normalized.statusCode).json({
    error: normalized,
  });
};
