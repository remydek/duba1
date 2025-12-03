import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildQuery<T extends Record<string, string | number | boolean | (string | number | boolean)[] | undefined>>(params: T, url: URL) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => url.searchParams.append(`${key}[]`, v.toString()));
        } else {
          url.searchParams.append(key, value.toString());
        }
      }
    });
    return url.toString();
  }