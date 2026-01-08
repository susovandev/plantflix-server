import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5555),
  HOST: z.string().default('127.0.0.1'),

  SERVICE_NAME: z.string().default('plantflix-server'),
  API_VERSION: z.string().default('1.0.0'),

  CLIENT_DEVELOPMENT_URL: z.string().default('http://localhost:3000'),
  CLIENT_PRODUCTION_URL: z.string().default('http://localhost:3001'),
});

export const env = envSchema.parse(process.env);
