// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';

export class InternalServerError extends HttpError {
  constructor(message: string = 'Internal Server Error') {
    super(StatusCodes.INTERNAL_SERVER_ERROR, message);
  }
}
