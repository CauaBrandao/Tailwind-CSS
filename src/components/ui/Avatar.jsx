import React from 'react';

const sizeMap = {
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-16 text-lg',
};

const statusMap = {
  online: 'bg-emerald-500 ring-white dark:ring-slate-900',
  offline: 'bg-slate-400 ring-white dark:ring-slate-900',
  busy: 'bg-red-500 ring-white dark:ring-slate-900',
  away: 'bg-amber-500 ring-white dark:ring-slate-900',
};

export function Avatar({
  src,
  alt = 'Avatar',
  name = '',
  size = 'md',
  status,
  className = '',
}) {
  const sizeClass = sizeMap[size] || sizeMap.md;
  const initials = name
    ? name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'U';

  return (
    <div className={`relative inline-flex shrink-0 ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClass} rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700`}
        />
      ) : (
        <div
          className={`${sizeClass} flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 font-bold text-white shadow-inner`}
        >
          {initials}
        </div>
      )}

      {status && (
        <span
          className={`absolute bottom-0 right-0 size-2.5 rounded-full ring-2 ${
            statusMap[status] || statusMap.online
          }`}
          title={`Status: ${status}`}
        />
      )}
    </div>
  );
}
