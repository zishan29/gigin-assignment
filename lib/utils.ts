import { ApiResponse } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatData(data: string[] | undefined) {
  return data?.map((d) => ({
    value: d,
    label: capitalizeFirstLetter(d),
  }));
}

export const wrapInQuotes = (value: string | undefined): string | undefined => {
  return value ? `"${value}"` : undefined;
};

export const calculateTotalPages = (data: ApiResponse): number => {
  const { numberOfResults, startIndex, endIndex } = data;
  const resultsPerPage = 10;
  return Math.floor(numberOfResults / resultsPerPage);
};
