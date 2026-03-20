import { memo } from 'react';

interface CalendarHeaderProps {
  currentYear: number;
  currentMonth: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const btnClass =
  'bg-transparent border-0 cursor-pointer text-secondary font-caption px-2.25 py-1.5 rounded-sm hover:bg-line-soft';

const CalendarHeader = memo(
  ({ currentYear, currentMonth, onPrevMonth, onNextMonth }: CalendarHeaderProps) => {
    return (
      <div className="flex items-center justify-between">
        <button className={btnClass} aria-label="이전 달" onClick={onPrevMonth}>
          &#9664;
        </button>
        <span className="font-title-2 text-primary">
          {currentYear}년 {currentMonth + 1}월
        </span>
        <button className={btnClass} aria-label="다음 달" onClick={onNextMonth}>
          &#9654;
        </button>
      </div>
    );
  }
);

export default CalendarHeader;
