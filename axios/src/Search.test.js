import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

/** Component */
import Search from "./Search";

jest.mock("axios");

describe("Search", () => {
  test("should fetch stories and display", () => {
    const data = [
      {
        id: 1,
        title: "Programmer One",
      },
    ];

    const called = axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: data } }));

    render(<Search />);

    userEvent.click(screen.getByRole("button"));

    expect(called).toBeCalledTimes(1);
  });
});
