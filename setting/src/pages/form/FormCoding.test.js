import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import NameForm from "./FormCoding";

describe("Form Page", () => {
  it("render FormCoding component", () => {
    render(<NameForm />);
    expect(screen.getByText(/Pendaftaran peserta coding bootcamp/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/nama lengkap/i)).toBeInTheDocument();
  });

  test("Input text for Nama Lengkap ,Email", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama lengkap/i }), { target: { value: "Riyandi Djohari" } });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "riyandidjohari8@gmail.com" } });
    expect(screen.getByLabelText(/nama lengkap/i)).toHaveValue("Riyandi Djohari");
    expect(screen.getByLabelText(/email/i)).toHaveValue("riyandidjohari8@gmail.com");
  });

  test("input number for no handphone", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: parseInt("082346569134") } });
    expect(screen.getByLabelText(/no handphone/i)).toHaveValue(parseInt("082346569134"));
  });

  test("input text for Nama, Email with number", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama lengkap/i }), { target: { value: "Riyandi8" } });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "riyandi" } });
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  test("input number for No Handphone < 9", () => {
    render(<NameForm />);
    fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: parseInt("082346") } });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });

  test("Input text should be empty if button Reset fired", () => {
    render(<NameForm />);
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(null);
  });
});
