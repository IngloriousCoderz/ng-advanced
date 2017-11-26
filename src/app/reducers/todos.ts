import { createSelector } from "@ngrx/store";

import { Todo } from "../Todo";

import {
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
  CLEAR
} from "./actionTypes";
import todo, * as fromTodo from "./todo";

export const getTodos = state => state;
export const getTodo = (state, id) => state.find(todo => todo.id === id);
export const isDone = (state, id) => fromTodo.isDone(getTodo(state, id));

export const areAllDone = createSelector(
  getTodos,
  (todos: Todo[]) =>
    console.log("(re)computing") || todos.every(fromTodo.isDone)
);

const todos = (state: Todo[] = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TODOS:
      return payload;
    case ADD_TODO: {
      const id = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: id + 1, text: payload }];
    }
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== payload);
    case TOGGLE_DONE:
      return state.map(t => (t.id === payload ? todo(t, action) : t));
    case CLEAR:
      return [];
    default:
      return state;
  }
};

export default todos;
