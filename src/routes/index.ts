// Types
import type { Application } from 'express';

// Routes
import healthCheckRoutes from '@module/health/health.route.js';

export default function configRoutes(app: Application) {
  app.use('/healthcheck', healthCheckRoutes);
}
