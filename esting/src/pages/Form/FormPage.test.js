import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "./FormCoding";

const setup = () => {
  return render(<FormCoding />);
};

describe("FormCoding", () => {
  test("renders FormCoding components", () => {
    setup();

    const titleLabel = screen.getByText("Pendaftaran Peserta Coding Bootcamp");
    expect(titleLabel).toBeInTheDocument();

    const labelNama = screen.getByLabelText(/Nama Lengkap/);
    expect(labelNama).toBeInTheDocument();

    const labelEmail = screen.getByLabelText(/Email/);
    expect(labelEmail).toBeInTheDocument();

    const labelNo = screen.getByLabelText(/No Handphone/);
    expect(labelNo).toBeInTheDocument();

    const labelPendidikan = screen.getByLabelText(/Latar Belakang Pendidikan/);
    expect(labelPendidikan).toBeInTheDocument();

    const labelKelas = screen.getByLabelText(/Kelas Coding yang Dipilih/);
    expect(labelKelas).toBeInTheDocument();

    const labelFoto = screen.getByLabelText(/Foto Surat Kesungguhan/);
    expect(labelFoto).toBeInTheDocument();

    const labelHarapan = screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/);
    expect(labelHarapan).toBeInTheDocument();
  });

  test("input form", () => {
    setup();

    const inputNama = screen.getByRole("textbox", { name: /nama/i });
    fireEvent.input(inputNama, { target: { value: "Ihsan Fauzi" } });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Ihsan Fauzi");

    const inputEmail = screen.getByRole("textbox", { name: /email/i });
    fireEvent.input(inputEmail, { target: { value: "ihsan@gmail.com" } });
    expect(screen.getByLabelText(/Email/)).toHaveValue("ihsan@gmail.com");

    const inputHarapan = screen.getByRole("textbox", { name: /harapan/i });
    fireEvent.input(inputHarapan, { target: { value: "Bisa Sukses" } });
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("Bisa Sukses");

    //for regex (error message)
    // expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  });

  test("submit button form", () => {
    setup();
    // fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("");
  });

  test("reset button form", () => {
    setup();
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("");
  });
});
