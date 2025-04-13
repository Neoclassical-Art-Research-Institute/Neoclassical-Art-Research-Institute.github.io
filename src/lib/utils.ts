// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// This is a standard implementation often used with Shadcn UI
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// You'll need to install these dependencies:
// npm install clsx tailwind-merge
// or
// yarn add clsx tailwind-merge