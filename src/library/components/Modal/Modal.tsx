
import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "../../theme/ThemeContext";
import { cn } from "../../../lib/utils";
import { X } from "lucide-react";

const modalVariants = cva(
  "fixed z-50 rounded-lg",
  {
    variants: {
      position: {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        top: "top-4 left-1/2 -translate-x-1/2",
        bottom: "bottom-4 left-1/2 -translate-x-1/2",
      },
      size: {
        default: "w-full max-w-lg",
        sm: "w-full max-w-sm",
        lg: "w-full max-w-2xl",
        xl: "w-full max-w-4xl",
      },
      // Style variants based on theme provider
      styleVariant: {
        minimalist: "border-0",
        outline: "border border-border bg-card",
        shadow: "shadow-xl bg-card",
        filled: "bg-card",
      },
    },
    defaultVariants: {
      position: "center",
      size: "default",
      styleVariant: "filled",
    },
  }
);

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof modalVariants>, "styleVariant"> {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, position, size, isOpen, onClose, hideCloseButton = false, children, ...props }, ref) => {
    const { variant: styleVariant } = useTheme();
    const [isVisible, setIsVisible] = useState(isOpen);

    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
      } else {
        const timer = setTimeout(() => setIsVisible(false), 300);
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEsc);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEsc);
        document.body.style.overflow = "";
      };
    }, [isOpen, onClose]);

    if (!isVisible) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/50 transition-opacity", 
            isOpen ? "opacity-100" : "opacity-0"
          )} 
          onClick={onClose}
        />
        
        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            modalVariants({ position, size, styleVariant }),
            "transition-all duration-300",
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95",
            className
          )}
          {...props}
        >
          {!hideCloseButton && (
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-6 pt-6", className)}
    {...props}
  />
));

ModalHeader.displayName = "ModalHeader";

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-xl font-semibold", className)}
    {...props}
  />
));

ModalTitle.displayName = "ModalTitle";

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

ModalDescription.displayName = "ModalDescription";

const ModalBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6", className)}
    {...props}
  />
));

ModalBody.displayName = "ModalBody";

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-end gap-2 px-6 pb-6", className)}
    {...props}
  />
));

ModalFooter.displayName = "ModalFooter";

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalBody, ModalFooter };
