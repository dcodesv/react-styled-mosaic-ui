
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";
import { ChevronDown } from "lucide-react";

const selectVariants = cva(
  "flex w-full items-center justify-between rounded-md text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
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
        minimalist: "border-b border-t-0 border-x-0 rounded-none px-0",
        outline: "border",
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

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    Omit<VariantProps<typeof selectVariants>, "styleVariant"> {
  size?: "default" | "sm" | "lg";
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();

    return (
      <div className="relative">
        <select
          className={cn(
            selectVariants({ variant, size, styleVariant, className }),
            "appearance-none pr-10"
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-50" />
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
