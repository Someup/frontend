import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function isServerEnvironment(): boolean {
  return typeof window === 'undefined';
}
