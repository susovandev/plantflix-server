// Core modules
import mongoose from 'mongoose';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

// Custom module
import { HttpError } from './apiError.js';

export interface NormalizedError {
  statusCode: number;
  status: 'error' | 'fail';
  message: string;
  details?: unknown;
}

export const normalizeError = (err: unknown): NormalizedError => {
  // Custom HTTP errors
  if (err instanceof HttpError) {
    return {
      statusCode: err.statusCode,
      status: err.status,
      message: err.message,
      details: err.details,
    };
  }

  // Zod validation
  if (err instanceof ZodError) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      status: 'fail',
      message: 'Invalid request data',
      details: err.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    };
  }

  // Mongoose validation
  if (err instanceof mongoose.Error.ValidationError) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      status: 'fail',
      message: 'Invalid request data',
      details: Object.values(err.errors).map((e) => e.message),
    };
  }

  // Mongoose cast error
  if (err instanceof mongoose.Error.CastError) {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      status: 'fail',
      message: `Invalid value for ${err.path}`,
      details: err.value,
    };
  }

  // Fallback
  return {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    status: 'error',
    message: 'Internal Server Error',
    details: err,
  };
};
