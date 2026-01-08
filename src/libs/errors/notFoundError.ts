// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';

export class NotFoundError extends HttpError {
  constructor(message: string = 'Not Found') {
    super(StatusCodes.NOT_FOUND, message);
  }
}
