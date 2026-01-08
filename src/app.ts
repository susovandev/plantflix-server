/**
 * @CoreModule
 */
import express from 'express';

/**
 * @Constants
 */
import { REQUEST_BODY_LIMIT } from '@constants/index.js';

/**
 * @ConfigModule
 */
import { corsConfig } from '@config/cors.js';
import morganMiddleware from '@config/morgan.js';

/**
 * @Routes
 */
import configRoutes from '@routes/index.js';

/**
 * @Types
 */
import type { Application } from 'express';

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

  return app;
}
