import { z } from 'zod';

const clientEnvSchema: z.ZodObject<{
  NEXT_PUBLIC_KAKAO_CLIENT_ID: z.ZodDefault<z.ZodString>;
  NEXT_PUBLIC_KAKAO_REDIRECT_URI: z.ZodDefault<z.ZodString>;
  NEXT_PUBLIC_API_BASE_URL: z.ZodDefault<z.ZodString>;
}> = z.object({
  NEXT_PUBLIC_KAKAO_CLIENT_ID: z.string().default(''),
  NEXT_PUBLIC_KAKAO_REDIRECT_URI: z.string().default(''),
  NEXT_PUBLIC_API_BASE_URL: z.string().default(''),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

const clientEnv: ClientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
  NEXT_PUBLIC_KAKAO_REDIRECT_URI: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export default clientEnv;
