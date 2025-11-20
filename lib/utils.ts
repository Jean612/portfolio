import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes intelligently.
 *
 * This utility uses `clsx` to conditionally join class names and `tailwind-merge` to resolve
 * conflicting Tailwind CSS classes (e.g., `px-2` and `px-4`).
 *
 * @param inputs - A list of class values (strings, objects, arrays, etc.) to be combined.
 * @returns A single string containing the merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
