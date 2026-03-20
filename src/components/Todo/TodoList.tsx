import type { Todo } from '@/types/todo';
import TodoItem from '@/components/Todo/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="flex-1 overflow-y-auto pr-1 scrollbar-app">
      <ul className="list-none flex flex-col gap-2" aria-live="polite" aria-label="할 일 목록">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
        ))}
      </ul>
      {todos.length === 0 && (
        <p className="text-center text-muted font-body-1 py-9">할 일이 없어요</p>
      )}
    </div>
  );
};

export default TodoList;
