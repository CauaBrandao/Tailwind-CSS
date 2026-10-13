import React from 'react';

export function Accordion({
  title,
  children,
  defaultOpen = false,
  badge,
  className = '',
}) {
  return (
    <details
      open={defaultOpen}
      className={`group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 open:border-blue-500/50 open:bg-blue-50/40 open:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:open:border-blue-500/30 dark:open:bg-blue-950/20 ${className}`}
    >
      <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-800 select-none marker:hidden dark:text-slate-200">
        <div className="flex items-center gap-3">
          <span>{title}</span>
          {badge && (
            <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {badge}
            </span>
          )}
        </div>
        <span className="text-xl font-bold text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-blue-600 dark:text-slate-500 dark:group-open:text-blue-400">
          ▾
        </span>
      </summary>
      <div className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 border-t border-slate-100 pt-3 dark:border-slate-800/60">
        {children}
      </div>
    </details>
  );
}
