import { memo } from 'react';
import type { TodoStore } from '@/types';
import { dateToKey } from '@/utils/date';

interface TodayStatsProps {
  today: Date;
  store: TodoStore;
}

const TodayStats = memo(({ today, store }: TodayStatsProps) => {
  const todos = store[dateToKey(today)] ?? [];
  const total = todos.length;
  const done = todos.filter((t) => t.done).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <aside
      className="mt-5 py-3.5 px-4 bg-surface border border-border-soft rounded-md flex flex-col gap-2.5 max-cal:mt-3 max-cal:mr-1.5"
      role="region"
      aria-label="오늘 통계"
    >
      <div className="flex justify-between items-center">
        <p className="text-sm text-secondary" aria-live="polite">
          {total === 0 ? '오늘 할 일이 없어요' : `오늘 ${done} / ${total}개 완료`}
        </p>
        <span className="text-sm font-semibold text-blue" aria-live="polite">
          {total > 0 ? `${percent}%` : ''}
        </span>
      </div>
      <div
        className="w-full h-1.5 bg-border-soft rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label="오늘 완료율"
      >
        <div
          className="h-full bg-blue rounded-full transition-width"
          style={{ width: `${percent}%` }}
        />
      </div>
    </aside>
  );
});

export default TodayStats;
