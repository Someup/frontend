import { z } from 'zod';

export const ARCHIVE_MAX_NUM: number = 20;

export const archiveSchema = z.object({
  name: z
    .string()
    .min(2, '제목은 2자 이상 30자 이하여야 합니다')
    .max(30, '제목은 2자 이상 30자 이하여야 합니다'),
});
