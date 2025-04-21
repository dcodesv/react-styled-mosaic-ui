
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-background border border-input",
        ghost: "bg-transparent border-transparent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "border-b border-t-0 border-x-0 rounded-none px-0 focus:border-primary",
        outline: "border bg-transparent",
        shadow: "shadow-sm focus:shadow-md transition-shadow",
        filled: "bg-muted/50",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      styleVariant: "outline",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    Omit<VariantProps<typeof inputVariants>, "styleVariant"> {
  size?: "default" | "sm" | "lg";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();

    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, size, styleVariant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
