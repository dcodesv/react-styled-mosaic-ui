
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";

const skeletonVariants = cva(
  "animate-pulse rounded-md",
  {
    variants: {
      variant: {
        default: "bg-muted",
        card: "bg-muted h-48",
        avatar: "rounded-full",
        button: "h-10",
      },
      size: {
        default: "",
        sm: "h-4",
        md: "h-8",
        lg: "h-16",
        xl: "h-32",
      },
      width: {
        default: "w-full",
        auto: "w-auto",
        sm: "w-20",
        md: "w-40",
        lg: "w-80",
        xl: "w-96",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "opacity-30",
        outline: "bg-transparent border border-muted",
        shadow: "shadow-sm",
        filled: "bg-muted",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default",
      styleVariant: "filled",
    },
  }
);

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof skeletonVariants>, "styleVariant"> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, size, width, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();
    
    return (
      <div
        ref={ref}
        className={cn(skeletonVariants({ variant, size, width, styleVariant, className }))}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

export { Skeleton };
