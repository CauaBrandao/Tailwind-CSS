import React from 'react';

export function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  icon: Icon,
  disabled = false,
  className = '',
  required = false,
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`w-full flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between"
        >
          <span>{label}</span>
          {required && <span className="text-red-500 text-xs">*obrigatório</span>}
        </label>
      )}

      <div className="relative flex items-center">
        {Icon && (
          <div className="pointer-events-none absolute left-3.5 flex items-center text-slate-400">
            <Icon className="size-4" />
          </div>
        )}
        <input
          id={inputId}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className={`w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-slate-900 transition placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-4 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-60 dark:bg-slate-900 dark:text-slate-100 dark:disabled:bg-slate-800 ${
            Icon ? 'pl-10' : ''
          } ${
            error
              ? 'border-red-500 focus-visible:ring-red-500/30 text-red-900 dark:text-red-200'
              : 'border-slate-300 focus-visible:border-blue-600 focus-visible:ring-blue-500/20 dark:border-slate-700 dark:focus-visible:border-blue-400'
          }`}
          {...props}
        />
      </div>

      {error ? (
        <span className="text-xs font-medium text-red-500" role="alert">
          {error}
        </span>
      ) : helperText ? (
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {helperText}
        </span>
      ) : null}
    </div>
  );
}
