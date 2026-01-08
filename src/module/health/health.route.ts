// Core Modules
import { Router } from 'express';

// Controllers
import healthCheckController from './health.controller.js';

const router = Router();

// GET - http://${hostname}:5555/healthcheck
router.get('/', healthCheckController);

export default router;
