export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export type TodoStore = Record<string, Todo[]>;
