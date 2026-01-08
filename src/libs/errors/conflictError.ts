// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';
export class ConflictError extends HttpError {
  constructor(message: string = 'Conflict') {
    super(StatusCodes.CONFLICT, message);
  }
}
