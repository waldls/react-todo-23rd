import { useState, useCallback, useEffect, useRef } from 'react';
import type { TodoStore } from '@/types/todo';
import { dateToKey } from '@/utils/date';

// 로컬 스토리지에서 저장된 할 일 데이터를 불러옴
const loadStore = (): TodoStore => {
  try {
    const raw = localStorage.getItem('todo-store');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

// 할 일 데이터를 로컬 스토리지에 저장
const persistStore = (store: TodoStore): void => {
  try {
    localStorage.setItem('todo-store', JSON.stringify(store));
  } catch (e) {
    console.warn('할 일 저장 실패:', e);
  }
};

export const useTodoStore = () => {
  // lazy initializer로 최초 1회만 로컬 스토리지에서 불러옴
  const [store, setStore] = useState<TodoStore>(loadStore);
  const didMountRef = useRef(false);

  // 최초 마운트는 건너뛰고, store가 바뀔 때마다 로컬 스토리지에 동기화
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    persistStore(store);
  }, [store]);

  // 특정 날짜에 새 할 일 추가
  const addTodo = useCallback((date: Date, text: string) => {
    const key = dateToKey(date);
    setStore((prev) => ({
      ...prev,
      [key]: [...(prev[key] ?? []), { id: crypto.randomUUID(), text: text.trim(), done: false }],
    }));
  }, []);

  // 특정 할 일의 완료 여부 토글
  const toggleTodo = useCallback((date: Date, id: string) => {
    const key = dateToKey(date);
    setStore((prev) => ({
      ...prev,
      [key]: (prev[key] ?? []).map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    }));
  }, []);

  // 특정 할 일 삭제, 해당 날짜에 할 일이 없으면 키도 제거
  const deleteTodo = useCallback((date: Date, id: string) => {
    const key = dateToKey(date);
    setStore((prev) => {
      const updated = (prev[key] ?? []).filter((t) => t.id !== id);
      const next = { ...prev };
      if (updated.length === 0) {
        delete next[key];
      } else {
        next[key] = updated;
      }
      return next;
    });
  }, []);

  return { store, addTodo, toggleTodo, deleteTodo };
};
