import { useMemo } from 'react';
import type { TodoStore } from '@/types';
import { dateToKey, isSameDate } from '@/utils/date';
import CalendarDay from '@/components/Calendar/CalendarDay';
import { WEEKDAYS } from '@/constants/date';

interface CalendarGridProps {
  currentYear: number;
  currentMonth: number;
  selectedDate: Date;
  today: Date;
  store: TodoStore;
  onSelectDate: (date: Date) => void;
}

const CalendarGrid = ({
  currentYear,
  currentMonth,
  selectedDate,
  today,
  store,
  onSelectDate,
}: CalendarGridProps) => {
  const days = useMemo(() => {
    const result: { date: Date; isOtherMonth: boolean }[] = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    const prevLastDate = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = firstDay - 1; i >= 0; i--) {
      result.push({
        date: new Date(currentYear, currentMonth - 1, prevLastDate - i),
        isOtherMonth: true,
      });
    }
    for (let i = 1; i <= lastDate; i++) {
      result.push({ date: new Date(currentYear, currentMonth, i), isOtherMonth: false });
    }
    const remaining = (firstDay + lastDate) % 7 === 0 ? 0 : 7 - ((firstDay + lastDate) % 7);
    for (let i = 1; i <= remaining; i++) {
      result.push({ date: new Date(currentYear, currentMonth + 1, i), isOtherMonth: true });
    }
    return result;
  }, [currentYear, currentMonth]);

  return (
    <>
      <div className="grid grid-cols-7 text-center" role="row">
        {WEEKDAYS.map((day) => (
          <span key={day} className="text-sm font-medium text-muted py-1.5">
            {day}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.75" role="grid">
        {days.map(({ date, isOtherMonth }) => (
          <CalendarDay
            key={dateToKey(date)}
            date={date}
            isOtherMonth={isOtherMonth}
            isToday={isSameDate(date, today)}
            isSelected={isSameDate(date, selectedDate)}
            hasTodos={(store[dateToKey(date)] ?? []).length > 0}
            onClick={onSelectDate}
          />
        ))}
      </div>
    </>
  );
};

export default CalendarGrid;
