export const accessTokenConfig = {
  expiration: 60 * 60 * 24, // 1 day
  name: 'access_token',
} as const;

export const refreshTokenConfig = {
  expiration: 60 * 60 * 24, // 1 day(24 hours)
  name: 'refresh_token',
} as const;
