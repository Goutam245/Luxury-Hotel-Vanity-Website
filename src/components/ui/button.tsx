import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost:
          "text-foreground hover:bg-secondary hover:text-secondary-foreground rounded-md",
        link:
          "text-foreground underline-offset-4 hover:underline hover:text-primary",
        // Luxury variants
        luxury:
          "bg-primary text-primary-foreground tracking-widest uppercase hover:bg-primary/90 hover:shadow-[0_4px_30px_-4px_hsl(38_50%_55%_/_0.25)]",
        "luxury-outline":
          "border border-foreground/20 bg-transparent text-foreground tracking-widest uppercase hover:bg-foreground hover:text-background",
        "luxury-ghost":
          "bg-transparent text-foreground tracking-wider hover:text-primary",
        "luxury-gold":
          "bg-gradient-to-br from-[hsl(38_50%_55%)] to-[hsl(40_45%_70%)] text-primary-foreground tracking-widest uppercase shadow-sm hover:shadow-[0_4px_30px_-4px_hsl(38_50%_55%_/_0.25)]",
        hero:
          "bg-primary text-primary-foreground tracking-[0.2em] uppercase hover:bg-primary/90 hover:shadow-[0_4px_30px_-4px_hsl(38_50%_55%_/_0.25)] border-0",
        "hero-outline":
          "border border-primary-foreground/30 bg-transparent text-foreground tracking-[0.2em] uppercase hover:bg-primary-foreground/10 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-4 py-1.5 text-xs",
        lg: "h-12 px-8 py-3",
        xl: "h-14 px-10 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
