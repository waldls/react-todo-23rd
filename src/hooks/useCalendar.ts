import { useState } from 'react';

const today = new Date();

export const useCalendar = () => {
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(today));

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear((y) => y - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear((y) => y + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    setCurrentYear(date.getFullYear());
    setCurrentMonth(date.getMonth());
  };

  return { today, currentYear, currentMonth, selectedDate, goPrevMonth, goNextMonth, selectDate };
};
