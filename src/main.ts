// Load env
import '@config/loadEnv.js';

// Core Modules
import initializeExpressApplication from '@app.js';

// Config
import { env } from '@config/env.js';
import Logger from '@config/logger.js';
import { connectDB } from '@config/database.js';

// Types
import type { Application } from 'express';

/**
 * Bootstrap the application
 */
export default async function main() {
  const app: Application = initializeExpressApplication();

  const { HOST, PORT, SERVICE_NAME, NODE_ENV } = env;

  if (env.NODE_ENV !== 'test') {
    await connectDB();

    app.listen(PORT, () => {
      Logger.info(`${SERVICE_NAME} is running on http://${HOST}:${PORT}`);
      Logger.info(`Environment: ${NODE_ENV}`);
      Logger.info(`Health check route: http://${HOST}:${PORT}/healthcheck`);
    });
  }
}

main();
