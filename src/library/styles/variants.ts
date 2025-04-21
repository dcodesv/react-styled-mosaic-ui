
// Utility file with reusable style combinations for variants

import { cva } from "class-variance-authority";

export const baseItemStyles = {
  minimalist: "border-none shadow-none bg-transparent",
  outline: "border bg-transparent",
  shadow: "shadow-md hover:shadow-lg transition-shadow",
  filled: "bg-opacity-100",
};

export const baseFormElementStyles = {
  minimalist: "border-b border-t-0 border-x-0 rounded-none px-0",
  outline: "border bg-transparent",
  shadow: "shadow-sm focus:shadow-md transition-shadow",
  filled: "bg-muted/50",
};

export const createVariantStyles = (componentType: 'button' | 'input' | 'card' | 'toggle') => {
  switch (componentType) {
    case 'button':
      return {
        minimalist: "shadow-none border-none",
        outline: "bg-transparent border border-current",
        shadow: "shadow-md hover:shadow-lg transition-shadow",
        filled: "bg-opacity-100",
      };
    case 'input':
      return baseFormElementStyles;
    case 'card':
      return {
        minimalist: "border-0 bg-transparent",
        outline: "border border-border bg-transparent",
        shadow: "shadow-md hover:shadow-lg transition-shadow",
        filled: "bg-card",
      };
    case 'toggle':
      return {
        minimalist: "border-none",
        outline: "border",
        shadow: "shadow-sm data-[state=on]:shadow-md",
        filled: "bg-muted/50 data-[state=on]:bg-accent",
      };
    default:
      return baseItemStyles;
  }
};
