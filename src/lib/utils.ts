import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatCash(amount: number): string {
  const currency = "\n₽";
  if (amount < 10000) {
    return amount + currency;
  }
  return new Intl.NumberFormat("ru").format(amount) + currency;
}

function calcPrice(sale: number, price: number): number {
  return price - (price * sale) / 100;
}

export { cn, formatCash, calcPrice };
