import { memo, useCallback } from 'react';

interface CalendarDayProps {
  date: Date;
  isOtherMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasTodos: boolean;
  onClick: (date: Date) => void;
}

const CalendarDay = memo(
  ({ date, isOtherMonth, isToday, isSelected, hasTodos, onClick }: CalendarDayProps) => {
    const handleClick = useCallback(() => onClick(date), [onClick, date]);

    const bgClass = isSelected ? 'bg-blue' : 'bg-transparent';
    const textClass = isSelected
      ? 'text-white'
      : isToday
        ? 'text-orange'
        : isOtherMonth
          ? 'text-muted'
          : 'text-primary';
    const hoverClass = isSelected ? '' : 'hover:bg-line-soft';

    return (
      <button
        className={`relative w-full cursor-pointer border-0 font-body-1 py-2.25 px-0.5 rounded-sm text-center max-cal:py-1.5 max-cal:font-body-2 ${bgClass} ${textClass} ${hoverClass}`}
        onClick={handleClick}
      >
        {date.getDate()}
        {isToday && !isSelected && (
          <span className="absolute bottom-0.75 left-1/2 -translate-x-1/2 size-1 rounded-full bg-orange" />
        )}
        {hasTodos && <span className="absolute top-0.75 right-1 size-1 rounded-full bg-green" />}
      </button>
    );
  }
);

export default CalendarDay;
