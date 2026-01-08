// Core module
import { StatusCodes } from 'http-status-codes';
// Custom modules
import { HttpError } from './apiError.js';

export class ServiceUnavailableError extends HttpError {
  constructor(message: string = 'Service Unavailable') {
    super(StatusCodes.SERVICE_UNAVAILABLE, message);
  }
}
