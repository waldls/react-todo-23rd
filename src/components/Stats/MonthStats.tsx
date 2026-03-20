import { memo, useMemo } from 'react';
import type { TodoStore } from '@/types/todo';
import { dateToKey } from '@/utils/date';

interface MonthStatsProps {
  currentYear: number;
  currentMonth: number;
  store: TodoStore;
}

const MonthStats = memo(({ currentYear, currentMonth, store }: MonthStatsProps) => {
  const { total, done } = useMemo(() => {
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let total = 0;
    let done = 0;
    for (let i = 1; i <= daysInMonth; i++) {
      const todos = store[dateToKey(new Date(currentYear, currentMonth, i))] ?? [];
      total += todos.length;
      done += todos.filter((t) => t.done).length;
    }
    return { total, done };
  }, [store, currentYear, currentMonth]);

  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <aside
      className="py-3.5 px-4 bg-surface border border-line-soft rounded-md flex flex-col gap-2.5 max-cal:ml-1.5"
      role="region"
      aria-label="이번 달 통계"
    >
      <div className="flex justify-between items-center">
        <p className="font-body-2 text-secondary" aria-live="polite">
          {total === 0 ? '이번 달 할 일이 없어요' : `이번 달 ${done} / ${total}개 완료`}
        </p>
        <span className="font-body-2 text-blue" aria-live="polite">
          {total > 0 ? `${percent}%` : ''}
        </span>
      </div>
      <div
        className="w-full h-1.5 bg-line-soft rounded-full overflow-hidden"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-label="이번 달 완료율"
      >
        <div
          className="h-full bg-blue rounded-full transition-width"
          style={{ width: `${percent}%` }}
        />
      </div>
    </aside>
  );
});

export default MonthStats;
