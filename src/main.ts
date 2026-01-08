// Core Modules
import initializeExpressApplication from '@app.js';

// Config
import { env } from '@config/env.js';
import Logger from '@config/logger.js';

// Types
import type { Application } from 'express';

/**
 * Bootstrap the application
 */
export default function main() {
  const app: Application = initializeExpressApplication();

  const port = env.PORT;
  const node_env = env.NODE_ENV;
  const host = env.HOST;

  app.listen(port, () => {
    Logger.info(`Server is running in ${node_env} mode on http://${host}:${port}`);
    Logger.info(`Healthcheck: http://${host}:${port}/healthcheck`);
  });
}

main();
