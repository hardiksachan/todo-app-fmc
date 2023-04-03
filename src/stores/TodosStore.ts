import { createMemo } from "solid-js";
import { createStore, produce } from "solid-js/store";
import { v4 as uuid } from "uuid";

export interface Todo {
  id: string;
  task: string;
  complete: boolean;
}

const [todos, setTodos] = createStore<Todo[]>([]);

function addTodo(task: string) {
  const todo = { id: uuid(), task, complete: false };
  setTodos(produce((todos) => todos.push(todo)));
}

function toggleTodo(id: string) {
  setTodos(
    (todo) => todo.id === id,
    produce((todo) => (todo.complete = !todo.complete))
  );
}

function removeTodo(id: string) {
  setTodos(todos.filter((todo) => todo.id !== id));
}

function removeCompletedTodos() {
  setTodos(todos.filter((todo) => !todo.complete));
}

const incompleteTodos = createMemo(
  () => todos.filter((todo) => !todo.complete).length
);

export {
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
  removeCompletedTodos,
  incompleteTodos,
};
