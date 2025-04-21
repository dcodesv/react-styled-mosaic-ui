
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "border-none",
        outline: "border",
        shadow: "shadow-sm data-[state=on]:shadow-md",
        filled: "bg-muted/50 data-[state=on]:bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      styleVariant: "filled",
    },
  }
);

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<VariantProps<typeof toggleVariants>, "styleVariant"> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, pressed, onPressedChange, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.onClick) {
        props.onClick(e);
      }
      
      if (onPressedChange) {
        onPressedChange(!pressed);
      }
    };
    
    return (
      <button
        ref={ref}
        type="button"
        data-state={pressed ? "on" : "off"}
        className={cn(toggleVariants({ variant, size, styleVariant, className }))}
        onClick={handleClick}
        aria-pressed={pressed}
        {...props}
      />
    );
  }
);

Toggle.displayName = "Toggle";

export { Toggle };
