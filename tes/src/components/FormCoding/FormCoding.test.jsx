import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "./FormCoding";

describe("FormCoding", () => {
  test("renders FormCoding component", () => {
    render(<FormCoding />);

    expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Latar Belakang/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kelas Coding/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Surat Kesungguhan/)).toBeInTheDocument();
  });

  test("input data", () => {
    render(<FormCoding />);

    // input data
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Muhamad Jaya" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "jayamuhamad99@gmail.com" },
    });
    fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/ }), {
      target: { value: "087876151046" },
    });

    // check data
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Muhamad Jaya");
    expect(screen.getByLabelText(/Email/)).toHaveValue("jayamuhamad99@gmail.com");
    expect(screen.getByLabelText(/No Handphone/).value).toBe("087876151046");
  });

  test("input data error", () => {
    render(<FormCoding />);

    // input data
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Muhamad Jaya1" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "jayamuhamad99" },
    });
    fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/ }), {
      target: { value: "087876151046087876151046" },
    });

    // check value
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Muhamad Jaya1");
    expect(screen.getByLabelText(/Email/)).toHaveValue("jayamuhamad99");
    expect(screen.getByLabelText(/No Handphone/).value).toBe("087876151046087876151046");

    // check value error
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });
});
