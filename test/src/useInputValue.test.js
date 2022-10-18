import { renderHook, act } from "@testing-library/react-hooks";

/** Custom Hooks */
import { useInputValue } from "./useInputValue";

describe("useInputValue", () => {
  test("should return current initial value", () => {
    const { result } = renderHook(() => useInputValue("Malvino"));

    expect(result.current.value).toEqual("Malvino");
  });

  test("should called onChange method", () => {
    const { result } = renderHook(() => useInputValue("Malvino"));

    act(() => {
      result.current.onChange({ target: { value: "Austin" } });
    });

    expect(result.current.value).toEqual("Austin");
  });
});
