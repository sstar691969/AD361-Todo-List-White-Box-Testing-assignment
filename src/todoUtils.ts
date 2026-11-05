

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export function createTodo(text: string): Todo {
  return {
    id: Date.now(),
    text,
    done: false,
  };
}

export function addTodo(todos: Todo[], text: string): Todo[] {
  if (text.trim() === "") {
    return todos;
  }

  return [...todos, createTodo(text.trim())];
}

export function countDone(todos: Todo[]): number {
  let count = 0;

  for (const todo of todos) {
    if (todo.done) {
      count++;
    }
  }

  return count;
}
