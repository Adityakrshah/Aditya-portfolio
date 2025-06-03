import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// this is for using multiple class names
const cn /*cn= class name*/= (...inputs) => {
  return twMerge(clsx(inputs));
}

export default cn;