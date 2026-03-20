import { memo } from 'react';
import type { TodoStore } from '@/types';
import TodayStats from '@/components/Stats/TodayStats';
import MonthStats from '@/components/Stats/MonthStats';
import CalendarHeader from '@/components/Calendar/CalendarHeader';
import CalendarGrid from '@/components/Calendar/CalendarGrid';

interface CalendarSectionProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  today: Date;
  store: TodoStore;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onSelectDate: (date: Date) => void;
}

const CalendarSection = memo(
  ({
    currentYear,
    currentMonth,
    selectedDate,
    today,
    store,
    onPrevMonth,
    onNextMonth,
    onSelectDate,
  }: CalendarSectionProps) => {
    return (
      <section
        className="w-105 shrink-0 flex flex-col border-r-1.5 border-border p-7 bg-surface-alt overflow-y-auto max-cal:w-full max-cal:shrink-0 max-cal:border-r-0 max-cal:border-b-1.5 max-cal:p-4 max-cal:grid max-cal:grid-cols-2"
        role="region"
        aria-labelledby="calendarTitle"
      >
        <div className="flex flex-col gap-4 max-cal:col-span-full">
          <CalendarHeader
            currentYear={currentYear}
            currentMonth={currentMonth}
            onPrevMonth={onPrevMonth}
            onNextMonth={onNextMonth}
          />
          <CalendarGrid
            currentYear={currentYear}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            today={today}
            store={store}
            onSelectDate={onSelectDate}
          />
        </div>
        <TodayStats today={today} store={store} />
        <MonthStats currentYear={currentYear} currentMonth={currentMonth} store={store} />
      </section>
    );
  }
);

export default CalendarSection;
