import { Todo } from "../Todo";
import * as types from "./actionTypes";

export const setText = (text: string) => ({
  type: types.SET_TEXT,
  payload: text
});

export const setTodos = (todos: Todo[]) => ({
  type: types.SET_TODOS,
  payload: todos
});

export const addTodo = (text?: string) => ({
  type: types.ADD_TODO,
  payload: text
});

export const removeTodo = (id: number) => ({
  type: types.REMOVE_TODO,
  payload: id
});

export const toggleDone = (id: number) => ({
  type: types.TOGGLE_DONE,
  payload: id
});

export const clear = () => ({ type: types.CLEAR });

export const fetchTodos = () => ({ type: types.FETCH_TODOS_EFFECT });

export const addTodoRemote = () => ({
  type: types.ADD_TODO_EFFECT
});

export const removeTodoRemote = (id: number) => ({
  type: types.REMOVE_TODO_EFFECT,
  payload: id
});

export const toggleDoneRemote = (todo: Todo) => ({
  type: types.TOGGLE_DONE_EFFECT,
  payload: todo
});
