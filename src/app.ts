// Core Modules
import express from 'express';

// Constants
import { REQUEST_BODY_LIMIT } from '@constants/index.js';

// Config
import { corsConfig } from '@config/cors.js';
import morganMiddleware from '@config/morgan.js';

// Routes
import configRoutes from '@routes/index.js';

// Types
import type { Application } from 'express';

// Middlewares
import { notFoundHandler } from '@middlewares/notFound.middleware.js';
import { errorHandler } from '@middlewares/error.middleware.js';

/**
 * Initializes an express application
 * @returns An express application
 */
export default function initializeExpressApplication(): Application {
  const app = express();

  // Morgan middleware
  app.use(morganMiddleware);

  // CORS middleware
  app.use(corsConfig);

  // Body-parser middleware
  app.use(express.json({ limit: REQUEST_BODY_LIMIT, strict: true }));
  app.use(express.urlencoded({ extended: true, limit: REQUEST_BODY_LIMIT }));

  // import routes
  configRoutes(app);

  // Not found middleware
  app.use(notFoundHandler);

  // Error middleware
  app.use(errorHandler);

  return app;
}
