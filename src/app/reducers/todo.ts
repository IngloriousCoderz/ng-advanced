import { Todo } from "../Todo";
import { TOGGLE_DONE } from "./actionTypes";

export const isDone = state => state.done;

const todo = (state: Todo, action) => {
  switch (action.type) {
    case TOGGLE_DONE:
      return { ...state, done: !state.done };
    default:
      return state;
  }
};

export default todo;
