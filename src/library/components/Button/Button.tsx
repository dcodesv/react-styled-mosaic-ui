
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "shadow-none border-none",
        outline: "bg-transparent border border-current",
        shadow: "shadow-md hover:shadow-lg transition-shadow",
        filled: "bg-opacity-100",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        styleVariant: "outline",
        className: "text-primary border-primary hover:bg-primary/10",
      },
      {
        variant: "destructive",
        styleVariant: "outline",
        className: "text-destructive border-destructive hover:bg-destructive/10",
      },
      {
        variant: "default",
        styleVariant: "minimalist",
        className: "bg-primary/80 hover:bg-primary",
      },
      {
        variant: "default",
        styleVariant: "filled",
        className: "bg-primary",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      styleVariant: "filled",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof buttonVariants>, "styleVariant"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, styleVariant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
