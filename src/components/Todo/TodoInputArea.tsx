import { useRef } from 'react';
import Button from '@/components/Common/Button';

interface TodoInputAreaProps {
  onAdd: (text: string) => void;
}

const TodoInputArea = ({ onAdd }: TodoInputAreaProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const text = inputRef.current?.value.trim() ?? '';
    if (!text) return;
    onAdd(text);
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) handleAdd();
  };

  return (
    <div className="flex gap-2 shrink-0 pt-3 border-t border-line-soft">
      <input
        ref={inputRef}
        type="text"
        placeholder="할 일을 입력하세요"
        autoComplete="off"
        aria-label="할 일 입력"
        className="flex-1 border-1.5 border-line rounded-md bg-surface-alt shadow-inset font-body-1 text-primary px-3.5 py-2.5 outline-none transition-border-color focus:border-blue placeholder:text-muted"
        onKeyDown={handleKeyDown}
      />
      <Button variant="blue" size="md" onClick={handleAdd}>
        추가
      </Button>
    </div>
  );
};

export default TodoInputArea;
