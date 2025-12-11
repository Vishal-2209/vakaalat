import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      default: 'bg-foreground text-background hover:opacity-90',
      primary: 'bg-foreground text-background hover:opacity-90',
      secondary: 'bg-foreground/10 text-foreground hover:bg-foreground/20 backdrop-blur-sm',
      accent: 'bg-accent text-white hover:opacity-90',
      outline: 'border border-foreground/20 text-foreground hover:bg-foreground/10',
      ghost: 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3 text-base'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
