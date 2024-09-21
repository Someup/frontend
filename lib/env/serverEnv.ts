import { z } from 'zod';

const serverEnvSchema: z.ZodObject<{
  SESSION_SECRET_KEY: z.ZodString;
}> = z.object({
  SESSION_SECRET_KEY: z.string(),
});

export type ServerEnv = z.infer<typeof serverEnvSchema>;

const serverEnv: ServerEnv = serverEnvSchema.parse({
  SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
});

export default serverEnv;
