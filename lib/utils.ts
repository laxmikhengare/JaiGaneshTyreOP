import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const waLink = (number: string, text: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
