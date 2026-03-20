import { useState } from 'react';

interface TodoInputAreaProps {
  onAdd: (text: string) => void;
}

const TodoInputArea = ({ onAdd }: TodoInputAreaProps) => {
  const [value, setValue] = useState('');

  const handleAdd = () => {
    const text = value.trim();
    if (!text) return;
    onAdd(text);
    setValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="flex gap-2 shrink-0 pt-3 border-t border-border-soft">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할 일을 입력하세요"
        autoComplete="off"
        aria-label="할 일 입력"
        className="flex-1 border-1.5 border-border rounded-md bg-surface-alt shadow-inset font-sans text-md text-primary px-3.5 py-2.5 outline-none transition-border-color focus:border-blue placeholder:text-muted"
        onKeyDown={handleKeyDown}
      />
      <button
        className="border border-blue bg-blue-soft text-blue text-md font-semibold py-2.5 px-5 rounded-md cursor-pointer font-sans"
        onClick={handleAdd}
      >
        추가
      </button>
    </div>
  );
};

export default TodoInputArea;
