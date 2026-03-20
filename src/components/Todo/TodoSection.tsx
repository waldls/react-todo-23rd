import { memo, useCallback } from 'react';
import type { Todo } from '@/types';
import { formatDateTitle } from '@/utils/date';
import TodoList from '@/components/Todo/TodoList';
import TodoInputArea from '@/components/Todo/TodoInputArea';

interface TodoSectionProps {
  selectedDate: Date;
  todos: Todo[];
  onAdd: (date: Date, text: string) => void;
  onToggle: (date: Date, id: number) => void;
  onDelete: (date: Date, id: number) => void;
}

const TodoSection = memo(({ selectedDate, todos, onAdd, onToggle, onDelete }: TodoSectionProps) => {
  const handleAdd = useCallback((text: string) => onAdd(selectedDate, text), [onAdd, selectedDate]);
  const handleToggle = useCallback(
    (id: number) => onToggle(selectedDate, id),
    [onToggle, selectedDate]
  );
  const handleDelete = useCallback(
    (id: number) => onDelete(selectedDate, id),
    [onDelete, selectedDate]
  );

  return (
    <section
      className="flex-1 flex flex-col py-7 px-8 gap-3.5 overflow-hidden"
      aria-label="할 일 목록"
    >
      <h2 className="text-lg font-semibold text-primary pb-3 border-b border-border-soft shrink-0">
        {formatDateTitle(selectedDate)}
      </h2>
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      <TodoInputArea onAdd={handleAdd} />
    </section>
  );
});

export default TodoSection;
