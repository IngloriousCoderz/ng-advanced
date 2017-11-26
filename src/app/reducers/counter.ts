const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COUNT = "SET_COUNT";

export const increment = (amount: number = 1) => ({
  type: INCREMENT,
  payload: amount
});

export const decrement = (amount: number = 1) => ({
  type: DECREMENT,
  payload: amount
});

export const setCount = (count: number) => ({
  type: SET_COUNT,
  payload: count
});

export const getCount = state => state.count;

const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + action.payload });
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - action.payload });
    case SET_COUNT:
      return state.count !== action.payload
        ? Object.assign({}, state, { count: action.payload })
        : state;
    default:
      return state;
  }
};

export default counter;
