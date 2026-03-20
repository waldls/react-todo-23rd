import { useMemo } from 'react';
import { useTodoStore } from '@/hooks/useTodoStore';
import { useCalendar } from '@/hooks/useCalendar';
import { dateToKey } from '@/utils/date';
import CalendarSection from '@/components/Calendar/CalendarSection';
import TodoSection from '@/components/Todo/TodoSection';

const TodoPage = () => {
  const { store, addTodo, toggleTodo, deleteTodo } = useTodoStore();
  const { today, currentYear, currentMonth, selectedDate, goPrevMonth, goNextMonth, selectDate } =
    useCalendar();

  const todos = useMemo(() => store[dateToKey(selectedDate)] ?? [], [store, selectedDate]);

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-6 bg-bg bg-app-gradient font-sans text-primary max-cal:h-screen max-cal:p-0 max-cal:items-stretch">
      <div className="w-full max-w-275 h-app flex flex-col bg-surface border-1.5 border-border rounded-lg shadow-card overflow-hidden max-cal:h-full max-cal:rounded-none max-cal:border-0 max-cal:shadow-none">
        <header className="border-b-1.5 border-border py-5 px-9 text-center bg-surface shrink-0">
          <h1 className="text-xl font-semibold tracking-title text-primary">Vanilla Todo</h1>
        </header>
        <main className="flex flex-1 overflow-hidden max-cal:flex-col">
          <CalendarSection
            currentYear={currentYear}
            currentMonth={currentMonth}
            selectedDate={selectedDate}
            today={today}
            store={store}
            onPrevMonth={goPrevMonth}
            onNextMonth={goNextMonth}
            onSelectDate={selectDate}
          />
          <TodoSection
            selectedDate={selectedDate}
            todos={todos}
            onAdd={addTodo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </main>
      </div>
    </div>
  );
};

export default TodoPage;
