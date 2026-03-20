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

const TodoSection = ({ selectedDate, todos, onAdd, onToggle, onDelete }: TodoSectionProps) => {
  return (
    <section
      className="flex-1 flex flex-col py-7 px-8 gap-3.5 overflow-hidden"
      aria-label="할 일 목록"
    >
      <h2 className="text-lg font-semibold text-primary pb-3 border-b border-border-soft shrink-0">
        {formatDateTitle(selectedDate)}
      </h2>
      <TodoList
        todos={todos}
        onToggle={(id) => onToggle(selectedDate, id)}
        onDelete={(id) => onDelete(selectedDate, id)}
      />
      <TodoInputArea onAdd={(text) => onAdd(selectedDate, text)} />
    </section>
  );
};

export default TodoSection;
