import React from 'react';

export function Card({
  children,
  className = '',
  hoverable = false,
  padding = 'p-6',
  ...props
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${padding} ${
        hoverable
          ? 'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:hover:border-slate-700'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
