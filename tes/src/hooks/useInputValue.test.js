import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("return initial value", () => {
    const { result } = renderHook(() => useInputValue("test string"));
    expect(result.current.value).toEqual("test string");
  });
});

describe("when updated", () => {
  it("return new value", () => {
    const { result } = renderHook(() => useInputValue("test string"));
    act(() => {
      result.current.onChange({
        target: { value: "this used for testing string" },
      });
    });
    expect(result.current.value).toEqual("this used for testing string");
  });
});
