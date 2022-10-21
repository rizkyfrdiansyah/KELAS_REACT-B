import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("when rendered", () => {
  it("return current initial value", () => {
    const { result } = renderHook(() => useInputValue("Test"));
    expect(result.current.value).toEqual("Test");
  });
});
describe("when called the onChange method", () => {
  it("change the value", () => {
    const { result } = renderHook(() => useInputValue("updated"));
    act(() => {
      result.current.onChange("updated");
    });
    expect(result.current.value).toEqual("updated");
  });
});
