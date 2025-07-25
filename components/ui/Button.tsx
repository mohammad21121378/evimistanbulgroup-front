'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from './Link';

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'auto';
type Color = 'blue' | 'red' | 'green' | 'light' | 'gray' | 'grayCustom' | 'white' | 'orange';
type Gradient = 'orange';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
  color?: Color;
  children: ReactNode;
  className?: string;
  outline?: boolean;
  onClick?: () => void;
  gradient?: Gradient;
  flex?: boolean;
  roundedFull?: boolean;
  href?: string | false;
  loading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  size = 'md',
  color = 'orange',
  children,
  className = '',
  outline = false,
  onClick = () => {},
  gradient=color==='orange' && 'orange',
  flex = false,
  roundedFull = false,
  href = false,
  loading = false,
  disabled = false,
  ...rest
}) => {
  const sizes: Record<Size, string> = {
    sm: 'h-[2rem] w-[8rem] text-[.875rem]',
    md: 'h-14 w-[9.5rem] text-[1rem]',
    lg: 'h-14 w-56 text-[1rem]',
    xl: 'h-14 w-full max-w-[18.125rem] text-[1rem]',
    '2xl': 'h-14 w-full max-w-[23.125rem] text-[1rem]',
    full: 'w-full h-14 min-h-14 text-[1rem]',
    auto: 'h-14 !w-auto px-5',
  };

  const colors: Record<Color, string> = {
    blue: 'outline-blue-600 bg-blue-600 hover:bg-blue-700 hover:outline-blue-700 text-white',
    orange: 'outline-orange-600 bg-orange-600 hover:bg-orange-700 hover:outline-orange-700 text-white',
    red: 'outline-red-600 bg-red-600 hover:bg-red-700 hover:outline-red-700 text-white',
    green: 'outline-green-600 bg-green-600 hover:bg-green-700 hover:outline-green-700 text-white',
    light: 'text-blue-500 bg-transportant !outline-0 font-semibold',
    white: 'text-black bg-white !outline-0 font-semibold hover:bg-gray-200',
    gray: 'outline-gray-400 bg-gray-400 hover:bg-gray-500 text-white',
    grayCustom: 'bg-gray-100 outline outline-dashed outline-gray-400 text-gray-400 hover:bg-gray-200',
  };

  const outlineColors: Record<Color, string> = {
    blue: 'outline-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 font-semibold',
    red: 'outline-red-600 bg-red-600 hover:bg-red-700 text-white',
    green: 'outline-green-600 bg-green-600 hover:bg-green-700 text-white',
    light: 'text-blue-500 bg-transportant !outline-0',
    gray: 'outline-gray-400 bg-gray-400 hover:bg-gray-500 text-white',
    grayCustom: 'bg-gray-100 outline outline-dashed outline-gray-400 text-gray-400 hover:bg-gray-200',
    white: 'text-black bg-white !outline-0 font-semibold hover:bg-gray-200',
    orange: 'outline-orange-600 bg-orange-600 hover:bg-orange-700 hover:outline-orange-700 text-white',
  };

  const gradientColors: Record<Gradient, string> = {
    orange: 'bg-[linear-gradient(90deg,#ea580c_0%,#f97316_100%)] hover:bg-[linear-gradient(90deg,#f97316_0%,#ea580c_100%)] font-bold outline-orange-600 text-white',
  };

  const isDisabled = loading || disabled;

  const buttonElement = (
    <button
      {...rest}
      onClick={onClick}
      disabled={isDisabled}
      className={`outline outline-1 ${roundedFull ? 'rounded-full' : 'rounded-2xl'} ${
        isDisabled ? 'opacity-75 cursor-not-allowed' : ''
      } p-0 items-center duration-300 transition-all ${sizes[size]} ${
        flex ? 'flex justify-center gap-2 items-center flex-nowrap' : 'grid'
      } ${
        gradient
          ? gradientColors[gradient]
          : outline
          ? outlineColors[color]
          : colors[color]
      } ${className}`}
    >
      {loading ? (
        <div className="flex justify-center items-center w-full gap-1.5">
          <div
            className="size-2 bg-white duration-400 rounded-full animate-bounce"
            style={{ animationDelay: '200ms' }}
          ></div>
          <div
            className="size-2 bg-white duration-400 rounded-full animate-bounce"
            style={{ animationDelay: '400ms' }}
          ></div>
          <div
            className="size-2 bg-white duration-400 rounded-full animate-bounce"
            style={{ animationDelay: '800ms' }}
          ></div>
        </div>
      ) : (
        children
      )}
    </button>
  );

  if (href) {
    return <Link href={href}>{buttonElement}</Link>;
  }

  return buttonElement;
};

export default Button;
