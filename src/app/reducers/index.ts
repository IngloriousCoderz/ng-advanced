import { combineReducers } from "@ngrx/store";

import { ADD_TODO } from "./actionTypes";
import { setText, addTodo } from "./actions";
import text, * as fromText from "./text";
import todos, * as fromTodos from "./todos";

export const getText = state => fromText.getText(state.root.text);
export const getTodos = state => fromTodos.getTodos(state.root.todos);
export const getTodo = (state, id) => fromTodos.getTodo(state.root.todos, id);
export const isDone = (state, id) => fromTodos.isDone(state.root.todos, id);
export const areAllDone = state => fromTodos.areAllDone(state.root.todos);

const combined = combineReducers({ text, todos });

const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        text: text(state.text, setText("")),
        todos: todos(state.todos, addTodo(state.text))
      });
    default:
      return combined(state, action);
  }
};

// const rootReducer = combineReducers({ text, todos });

export default rootReducer;
