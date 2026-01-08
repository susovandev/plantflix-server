/**
 * @CoreModule
 */
import dotenv from 'dotenv';
import process from 'node:process';
import { z } from 'zod';

/**
 * @ConfigModule
 */
import Logger from './logger.js';

dotenv.config({ path: './.env' });

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(5555),
  HOST: z.coerce.string().default('127.0.0.1'),
  SERVICE_NAME: z.string(),
  API_VERSION: z.string(),
  CLIENT_DEVELOPMENT_URL: z.string(),
  CLIENT_PRODUCTION_URL: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  Logger.error('Invalid environment variables');
  process.exit(1);
}

export const env = _env.data;
