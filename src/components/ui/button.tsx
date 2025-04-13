// src/components/ui/button.tsx
import React from 'react';
import { cn } from '@/lib/utils'; // Assuming path alias is configured

// Basic placeholder props - add others as needed (variant, size, etc.)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
    as?: 'button' | 'a';
    href?: string;
    variant?: string; // Add this line (optional variant prop)
    size?: string;    // Add this line (optional size prop)
  }

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, children, as = 'button', href, ...props }, ref) => {
    const Comp = as;

    // Basic styling - replace with actual Button styles from your library/design
    const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

    if (Comp === 'a') {
      return (
        <a
          className={cn(baseStyle, className)}
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} // Type assertion
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={cn(baseStyle, className)}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} // Type assertion
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };