interface CalendarDayProps {
  date: Date;
  isOtherMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  hasTodos: boolean;
  onClick: (date: Date) => void;
}

const CalendarDay = ({
  date,
  isOtherMonth,
  isToday,
  isSelected,
  hasTodos,
  onClick,
}: CalendarDayProps) => {
  const bgClass = isSelected ? 'bg-blue' : 'bg-transparent';
  const textClass = isSelected
    ? 'text-white'
    : isToday
      ? 'text-orange'
      : isOtherMonth
        ? 'text-muted'
        : 'text-primary';
  const fontClass = isSelected || isToday ? 'font-semibold' : isOtherMonth ? 'font-light' : '';
  const hoverClass = isSelected ? '' : 'hover:bg-border-soft';

  return (
    <button
      className={`relative w-full cursor-pointer border-0 font-sans text-md py-2.25 px-0.5 rounded-sm text-center max-cal:py-1.5 max-cal:text-sm ${bgClass} ${textClass} ${fontClass} ${hoverClass}`}
      onClick={() => onClick(date)}
    >
      {date.getDate()}
      {isToday && !isSelected && (
        <span className="absolute bottom-0.75 left-1/2 -translate-x-1/2 size-1 rounded-full bg-orange" />
      )}
      {hasTodos && <span className="absolute top-0.75 right-1 size-1 rounded-full bg-green" />}
    </button>
  );
};

export default CalendarDay;
