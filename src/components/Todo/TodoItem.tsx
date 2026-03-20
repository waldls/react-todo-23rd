import type { Todo } from '@/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li
      className={`flex items-center justify-between gap-3 py-2.75 px-3.5 bg-surface-alt border border-border-soft rounded-md ${todo.done ? 'opacity-50' : ''}`}
    >
      <p
        className={`flex-1 text-md leading-normal break-all ${todo.done ? 'line-through text-muted' : 'text-primary'}`}
      >
        {todo.text}
      </p>
      <div className="flex gap-1.5 shrink-0">
        <button
          className="border border-green bg-green-soft text-green text-xs font-medium py-1 px-2.5 rounded-sm cursor-pointer font-sans"
          onClick={() => onToggle(todo.id)}
        >
          {todo.done ? '취소' : '완료'}
        </button>
        <button
          className="border border-red bg-red-soft text-red text-xs font-medium py-1 px-2.5 rounded-sm cursor-pointer font-sans"
          onClick={() => onDelete(todo.id)}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
