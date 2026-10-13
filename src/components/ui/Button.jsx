import React from 'react';

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm focus-visible:ring-blue-500/40',
  secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200 active:bg-slate-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 focus-visible:ring-slate-400/40',
  outline: 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 focus-visible:ring-slate-400/40',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm focus-visible:ring-red-500/40',
  ghost: 'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 focus-visible:ring-slate-400/40',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-6 py-3 text-base rounded-2xl gap-2.5',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  ...props
}) {
  const selectedVariant = variantClasses[variant] || variantClasses.primary;
  const selectedSize = sizeClasses[size] || sizeClasses.md;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold transition duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 disabled:active:scale-100 cursor-pointer ${selectedVariant} ${selectedSize} ${className}`}
      {...props}
    >
      {Icon && <Icon className="size-4 shrink-0" />}
      {children}
    </button>
  );
}
