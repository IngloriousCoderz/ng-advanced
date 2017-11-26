import rootReducer, { isDone, areAllDone } from ".";
import * as actions from "./actions";

describe("TodosApp", () => {
  it("should create a default app state", () => {
    const stateBefore = undefined;
    const action = { type: "SOME_ACTION" };
    const stateAfter = { text: "", todos: [] };

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should set the form text", () => {
    const stateBefore = {
      text: "some text",
      todos: [{ id: 1, text: "Todo 1" }]
    };
    const action = actions.setText("some other text");
    const stateAfter = {
      text: "some other text",
      todos: [{ id: 1, text: "Todo 1" }]
    };

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should add a todo", () => {
    const stateBefore = { text: "some text", todos: [] };
    const action = actions.addTodo("Todo 1");
    const stateAfter = { text: "", todos: [{ id: 1, text: "some text" }] }; // "Todo 1"

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should remove a todo", () => {
    const stateBefore = {
      text: "some text",
      todos: [
        { id: 1, text: "Todo 1", done: true },
        { id: 2, text: "Todo 2", done: false },
        { id: 3, text: "Todo 3", done: false }
      ]
    };
    const action = actions.removeTodo(2);
    const stateAfter = {
      text: "some text",
      todos: [
        { id: 1, text: "Todo 1", done: true },
        { id: 3, text: "Todo 3", done: false }
      ]
    };

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should toggle the done property to a todo", () => {
    const stateBefore = {
      text: "some text",
      todos: [
        { id: 1, text: "Todo 1", done: true },
        { id: 2, text: "Todo 2", done: false }
      ]
    };
    const action = actions.toggleDone(2);
    const stateAfter = {
      text: "some text",
      todos: [
        { id: 1, text: "Todo 1", done: true },
        { id: 2, text: "Todo 2", done: true }
      ]
    };

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should clear all todos", () => {
    const stateBefore = {
      text: "some text",
      todos: [
        { id: 1, text: "Todo 1", done: true },
        { id: 2, text: "Todo 2", done: false }
      ]
    };
    const action = actions.clear();
    const stateAfter = { text: "some text", todos: [] };

    expect(rootReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it("should check the done property of todos", () => {
    const state = {
      root: {
        text: "some text",
        todos: [
          { id: 1, text: "Todo 1", done: true },
          { id: 2, text: "Todo 2", done: false }
        ]
      }
    };

    expect(isDone(state, 1)).toBe(true);
    expect(isDone(state, 2)).toBe(false);

    expect(areAllDone(state)).toBe(false);
    expect(areAllDone(state)).toBe(false);

    const root = rootReducer(state.root, actions.toggleDone(2));
    const newState = { root };
    expect(areAllDone(newState)).toBe(true);
    expect(areAllDone(newState)).toBe(true);
  });
});
