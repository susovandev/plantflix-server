// Core Modules
import morgan, { type StreamOptions } from 'morgan';

// Config
import { env } from './env.js';
import Logger from './logger.js';

const stream: StreamOptions = {
  write: (message) => Logger.http(message),
};

const skip = () => {
  const environment = env.NODE_ENV || 'development';
  return environment !== 'development';
};

const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms :remote-addr',
  { stream, skip },
);

export default morganMiddleware;
