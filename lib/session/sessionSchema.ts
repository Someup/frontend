import { z } from 'zod';

export const sessionPayloadSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  image: z.string(),
  token: z.string(),
});

export type SessionPayload = z.infer<typeof sessionPayloadSchema>;
