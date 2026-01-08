// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';

export class BadRequestError extends HttpError {
  constructor(message: string = 'Bad Request', details?: unknown) {
    super(StatusCodes.BAD_REQUEST, message, details);
  }
}
