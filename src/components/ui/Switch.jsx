import React from 'react';

export function Switch({
  checked,
  onChange,
  label,
  description,
  id,
  disabled = false,
  className = '',
}) {
  const switchId = id || (label ? `switch-${label.toLowerCase().replace(/\s+/g, '-')}` : 'switch-toggle');

  return (
    <label
      htmlFor={switchId}
      className={`relative inline-flex items-center gap-3 select-none ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${className}`}
    >
      <input
        type="checkbox"
        id={switchId}
        checked={checked}
        onChange={(e) => !disabled && onChange && onChange(e.target.checked)}
        disabled={disabled}
        className="peer sr-only"
      />
      {/* Background track using peer-checked */}
      <div className="relative h-7 w-12 rounded-full bg-slate-300 transition-colors duration-200 peer-checked:bg-blue-600 peer-focus-visible:ring-4 peer-focus-visible:ring-blue-500/30 dark:bg-slate-700 dark:peer-checked:bg-blue-500">
        {/* Sliding thumb using peer-checked:translate-x-5 */}
        <div className="absolute top-1 left-1 size-5 rounded-full bg-white shadow-sm transition-transform duration-200 peer-checked:translate-x-5" />
      </div>

      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
}
