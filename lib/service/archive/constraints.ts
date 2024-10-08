import { z } from 'zod';

export const ARCHIVE_MAX_NUM: number = 20;

export const ARCHIVE_NAME_MAX_LENGTH: number = 100;

export const ARCHIVE_NAME_MIN_LENGTH: number = 1;

export const archiveSchema = z.object({
  name: z
    .string()
    .min(ARCHIVE_NAME_MIN_LENGTH, '제목을 입력해주세요')
    .max(ARCHIVE_NAME_MAX_LENGTH, '제목을 100자 이내로 입력해주세요'),
});
