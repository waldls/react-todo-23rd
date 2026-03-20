import { useState } from 'react';
import type { TodoStore } from '@/types';
import { dateToKey } from '@/utils/date';

const loadStore = (): TodoStore => {
  try {
    const raw = localStorage.getItem('todo-store');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const persistStore = (store: TodoStore): void => {
  localStorage.setItem('todo-store', JSON.stringify(store));
};

export const useTodoStore = () => {
  const [store, setStore] = useState<TodoStore>(loadStore);

  const addTodo = (date: Date, text: string) => {
    const key = dateToKey(date);
    setStore((prev) => {
      const next = {
        ...prev,
        [key]: [...(prev[key] ?? []), { id: Date.now(), text: text.trim(), done: false }],
      };
      persistStore(next);
      return next;
    });
  };

  const toggleTodo = (date: Date, id: number) => {
    const key = dateToKey(date);
    setStore((prev) => {
      const next = {
        ...prev,
        [key]: (prev[key] ?? []).map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      };
      persistStore(next);
      return next;
    });
  };

  const deleteTodo = (date: Date, id: number) => {
    const key = dateToKey(date);
    setStore((prev) => {
      const updated = (prev[key] ?? []).filter((t) => t.id !== id);
      const next = { ...prev };
      if (updated.length === 0) {
        delete next[key];
      } else {
        next[key] = updated;
      }
      persistStore(next);
      return next;
    });
  };

  return { store, addTodo, toggleTodo, deleteTodo };
};
