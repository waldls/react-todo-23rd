import type { ButtonHTMLAttributes } from 'react';

type Variant = 'green' | 'red' | 'blue';
type Size = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  size?: Size;
}

const variantClass: Record<Variant, string> = {
  green: 'border-green bg-green-soft text-green',
  red: 'border-red bg-red-soft text-red',
  blue: 'border-blue bg-blue-soft text-blue',
};

const sizeClass: Record<Size, string> = {
  sm: 'text-xs font-medium py-1 px-2.5 rounded-sm',
  md: 'text-md font-semibold py-2.5 px-5 rounded-md',
};

const Button = ({ variant, size = 'sm', children, ...props }: ButtonProps) => (
  <button
    {...props}
    className={`border font-sans cursor-pointer whitespace-nowrap ${variantClass[variant]} ${sizeClass[size]}`}
  >
    {children}
  </button>
);

export default Button;
