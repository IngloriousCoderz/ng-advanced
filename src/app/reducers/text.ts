import { SET_TEXT, ADD_TODO } from "./actionTypes";

export const getText = state => state;

const text = (state: string = "", action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;
    case ADD_TODO:
      return "";
    default:
      return state;
  }
};

export default text;
