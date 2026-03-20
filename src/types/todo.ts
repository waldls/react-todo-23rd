export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export type TodoStore = Record<string, Todo[]>;
