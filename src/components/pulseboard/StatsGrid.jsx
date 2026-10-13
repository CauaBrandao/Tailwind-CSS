import React from 'react';
import { Card } from '../ui/Card';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const iconMap = {
  users: Users,
  revenue: DollarSign,
  conversion: TrendingUp,
  performance: Activity,
};

export function StatsGrid({ metrics }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = iconMap[metric.id] || Activity;
        return (
          <Card
            key={metric.id}
            hoverable
            padding="p-5"
            className="group relative overflow-hidden"
          >
            {/* Top row: Category and Icon */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                {metric.title}
              </span>
              <div className="flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                <Icon className="size-4" />
              </div>
            </div>

            {/* Metric Value */}
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                {metric.value}
              </span>
              <span
                className={`inline-flex items-center text-xs font-bold ${
                  metric.isPositive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {metric.change}
              </span>
            </div>

            {/* Subtitle / Description */}
            <p className="mt-1 text-xs text-muted">
              {metric.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
