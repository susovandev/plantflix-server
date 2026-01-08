// Core Modules
import request from 'supertest';
import { describe, it, expect } from 'vitest';

// Import the express application
import initializeExpressApplication from '../../app.js';

const app = initializeExpressApplication();

describe('Healthcheck Route', () => {
  it('should return a 200 status code', async () => {
    const response = await request(app).get('/healthcheck');

    expect(response.status).toBe(200);

    expect(response.body).toMatchObject({
      message: 'Up and running',
      status: 'success',
      statusCode: 200,
      data: {
        serviceName: process.env.SERVICE_NAME,
        environment: process.env.NODE_ENV,
        version: process.env.API_VERSION,
        uptime: expect.any(Number),
        timestamp: expect.any(Number),
        processId: expect.any(Number),
      },
    });
  });
});
