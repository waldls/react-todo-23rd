import { useState, useCallback } from 'react';
import type { TodoStore } from '@/types/todo';
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

  const updateStore = useCallback((updater: (prev: TodoStore) => TodoStore) => {
    setStore((prev) => {
      const next = updater(prev);
      persistStore(next);
      return next;
    });
  }, []);

  const addTodo = useCallback(
    (date: Date, text: string) => {
      const key = dateToKey(date);
      updateStore((prev) => ({
        ...prev,
        [key]: [...(prev[key] ?? []), { id: Date.now(), text: text.trim(), done: false }],
      }));
    },
    [updateStore]
  );

  const toggleTodo = useCallback(
    (date: Date, id: number) => {
      const key = dateToKey(date);
      updateStore((prev) => ({
        ...prev,
        [key]: (prev[key] ?? []).map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      }));
    },
    [updateStore]
  );

  const deleteTodo = useCallback(
    (date: Date, id: number) => {
      const key = dateToKey(date);
      updateStore((prev) => {
        const updated = (prev[key] ?? []).filter((t) => t.id !== id);
        const next = { ...prev };
        if (updated.length === 0) {
          delete next[key];
        } else {
          next[key] = updated;
        }
        return next;
      });
    },
    [updateStore]
  );

  return { store, addTodo, toggleTodo, deleteTodo };
};
