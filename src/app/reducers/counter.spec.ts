import counter, { increment, decrement, setCount, getCount } from "./counter";

describe("CounterApp", () => {
  it("should create a default counter", () => {
    const stateBefore = undefined;
    const action = { type: "SOME_ACTION" };
    const stateAfter = { count: 0 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should increment counter", () => {
    const stateBefore = { count: 3 };
    const action = increment(2);
    const stateAfter = { count: 5 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should increment counter by one if no amount provided", () => {
    const stateBefore = { count: 3 };
    const action = increment();
    const stateAfter = { count: 4 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should decrement counter", () => {
    const stateBefore = { count: 3 };
    const action = decrement(2);
    const stateAfter = { count: 1 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should decrement counter by one if no amount provided", () => {
    const stateBefore = { count: 3 };
    const action = decrement();
    const stateAfter = { count: 2 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should set a new count", () => {
    const stateBefore = { count: 3 };
    const action = setCount(5);
    const stateAfter = { count: 5 };

    expect(counter(stateBefore, action)).toEqual(stateAfter);
  });

  it("should not change state when new count is same as old", () => {
    const stateBefore = { count: 3 };
    const action = setCount(3);
    const stateAfter = stateBefore;

    expect(counter(stateBefore, action)).toBe(stateAfter);
  });

  it("should select the count property", () => {
    const state = { count: 2 };

    expect(getCount(state)).toBe(2);
  });
});
