/**
 * @CoreModule
 */
import { StatusCodes } from 'http-status-codes';

/**
 * @Types
 */
import type { Application } from 'express';

/**
 * @ConfigModule
 */
import { env } from '@config/index.js';

export default function configRoutes(app: Application) {
  app.get('/healthcheck', (req, res) => {
    res.status(StatusCodes.OK).json({
      status: 'success',
      statusCode: StatusCodes.OK,
      message: 'Up and running',
      data: {
        serviceName: env.SERVICE_NAME,
        environment: env.NODE_ENV,
        version: env.API_VERSION,
        uptime: process.uptime(),
        timestamp: Date.now(),
        processId: process.pid,
      },
    });
  });
}
