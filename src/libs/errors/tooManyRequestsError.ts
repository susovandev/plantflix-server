// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';

export class TooManyRequestsError extends HttpError {
  constructor(message: string = 'Too Many Requests') {
    super(StatusCodes.TOO_MANY_REQUESTS, message);
  }
}
