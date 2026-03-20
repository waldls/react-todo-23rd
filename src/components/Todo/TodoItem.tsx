import { memo, useCallback } from 'react';
import type { Todo } from '@/types';
import Button from '@/components/Common/Button';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = memo(({ todo, onToggle, onDelete }: TodoItemProps) => {
  const handleToggle = useCallback(() => onToggle(todo.id), [onToggle, todo.id]);
  const handleDelete = useCallback(() => onDelete(todo.id), [onDelete, todo.id]);

  return (
    <li
      className={`flex items-center justify-between gap-3 py-2.75 px-3.5 bg-surface-alt border border-line-soft rounded-md ${todo.done ? 'opacity-50' : ''}`}
    >
      <p
        className={`flex-1 text-md leading-normal break-all ${todo.done ? 'line-through text-muted' : 'text-primary'}`}
      >
        {todo.text}
      </p>
      <div className="flex gap-1.5 shrink-0">
        <Button variant="green" onClick={handleToggle}>
          {todo.done ? '취소' : '완료'}
        </Button>
        <Button variant="red" onClick={handleDelete}>
          삭제
        </Button>
      </div>
    </li>
  );
});

export default TodoItem;
