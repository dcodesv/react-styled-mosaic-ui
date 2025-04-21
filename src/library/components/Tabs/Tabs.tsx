
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";

const tabsVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        pills: "py-1",
        cards: "py-1",
      },
      state: {
        active: "", // This is set by styleVariant below
        inactive: "text-muted-foreground hover:text-foreground",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "",
        outline: "",
        shadow: "",
        filled: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        state: "active",
        styleVariant: "minimalist",
        className: "border-b-2 border-primary text-foreground rounded-none",
      },
      {
        variant: "default",
        state: "active",
        styleVariant: "outline",
        className: "border-b-2 border-primary text-foreground rounded-none",
      },
      {
        variant: "default",
        state: "active",
        styleVariant: "shadow",
        className: "border-b-2 border-primary text-foreground rounded-none shadow-sm",
      },
      {
        variant: "default",
        state: "active",
        styleVariant: "filled",
        className: "border-b-2 border-primary text-foreground rounded-none",
      },
      {
        variant: "pills",
        state: "active",
        styleVariant: "minimalist",
        className: "bg-transparent text-foreground border-b-2 border-primary",
      },
      {
        variant: "pills",
        state: "active",
        styleVariant: "outline",
        className: "border border-primary text-foreground",
      },
      {
        variant: "pills",
        state: "active",
        styleVariant: "shadow",
        className: "bg-primary text-primary-foreground shadow-sm",
      },
      {
        variant: "pills",
        state: "active",
        styleVariant: "filled",
        className: "bg-primary text-primary-foreground",
      },
      {
        variant: "cards",
        state: "active",
        styleVariant: "minimalist",
        className: "bg-transparent text-foreground border-b border-primary",
      },
      {
        variant: "cards",
        state: "active",
        styleVariant: "outline",
        className: "bg-background text-foreground border-t border-x rounded-b-none",
      },
      {
        variant: "cards",
        state: "active",
        styleVariant: "shadow",
        className: "bg-background text-foreground shadow-sm",
      },
      {
        variant: "cards",
        state: "active",
        styleVariant: "filled",
        className: "bg-background text-foreground",
      },
    ],
    defaultVariants: {
      variant: "default",
      state: "inactive",
      styleVariant: "filled",
    },
  }
);

export interface TabProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    Omit<VariantProps<typeof tabsVariants>, "styleVariant" | "state"> {
  isActive?: boolean;
  onClick?: (id: string) => void;
  id: string;
}

const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ className, variant, isActive, onClick, id, children, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();
    const state = isActive ? "active" : "inactive";
    
    const handleClick = () => {
      if (onClick) onClick(id);
    };

    return (
      <button
        className={cn(tabsVariants({ variant, state, styleVariant, className }))}
        onClick={handleClick}
        role="tab"
        aria-selected={isActive}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = "Tab";

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pills" | "cards";
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          "inline-flex items-center justify-center gap-2",
          variant === "default" && "border-b border-muted w-full space-x-4",
          variant === "pills" && "p-1 rounded-lg",
          variant === "cards" && "mb-0",
          className
        )}
        {...props}
      />
    );
  }
);

Tabs.displayName = "Tabs";

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}

const TabPanel = React.forwardRef<HTMLDivElement, TabPanelProps>(
  ({ className, isActive, ...props }, ref) => {
    if (!isActive) return null;
    
    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn("mt-2", className)}
        {...props}
      />
    );
  }
);

TabPanel.displayName = "TabPanel";

export { Tabs, Tab, TabPanel };
