// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';
export class UnauthorizedError extends HttpError {
  constructor(message: string = 'Unauthorized') {
    super(StatusCodes.UNAUTHORIZED, message);
  }
}
