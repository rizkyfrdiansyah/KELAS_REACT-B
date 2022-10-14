import { fireEvent, render, screen } from "@testing-library/react";

/** Component */
import FormCoding from "./FormCoding";

describe("FormCoding", () => {
  test("should render all form components", () => {
    render(<FormCoding />);

    expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Latar Belakang Pendidikan/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Foto Surat Kesungguhan/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
    expect(screen.getByText(/Reset/i)).toBeInTheDocument();
  });

  test("should have same value for all inputs", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), { target: { value: "Malvino Austin Tanura" } });
    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Malvino Austin Tanura");

    fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), { target: { value: "malvinoaustintanura@gmail.com" } });
    expect(screen.getByLabelText(/Email/)).toHaveValue("malvinoaustintanura@gmail.com");

    fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), { target: { value: 895633098496 } });
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(895633098496);

    fireEvent.change(screen.getByRole("radio", { name: /Latar Belakang Pendidikan/i }), { target: { value: "IT" } });
    expect(screen.getByLabelText(/Latar Belakang Pendidikan/).value).toBe("IT");

    fireEvent.change(screen.getByRole("combobox", { name: /Kelas Coding yang Dipilih/i }), { target: { value: "golang" } });
    expect(screen.getByLabelText(/Kelas Coding yang Dipilih/).value).toBe("golang");

    fireEvent.change(screen.getByRole("textbox", { name: /Harapan Untuk Coding Bootcamp Ini/i }), { target: { value: "harapan saya..." } });
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("harapan saya...");
  });

  test("should have error message", () => {
    render(<FormCoding />);

    fireEvent.input(screen.getByRole("textbox", { name: /Nama Lengkap/i }), { target: { value: "test23" } });
    expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();

    fireEvent.input(screen.getByRole("textbox", { name: /Email/i }), { target: { value: "malvinoaustintanura@" } });
    expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();

    fireEvent.input(screen.getByRole("spinbutton", { name: /No Handphone/i }), { target: { value: 1234 } });
    expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
  });

  test("should empty input after submit", () => {
    render(<FormCoding />);

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(null);
    expect(screen.getByRole("radio", { name: /IT/ })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "" })).not.toBeChecked();
    expect(screen.getByRole("option", { name: /Pilih Salah Satu Program/ })).toBeTruthy();
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("");
  });

  test("should empty input after reset", () => {
    render(<FormCoding />);

    fireEvent.click(screen.getByRole("button", { name: /Reset/i }));

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/Email/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/)).toHaveValue(null);
    expect(screen.getByRole("radio", { name: /IT/ })).not.toBeChecked();
    expect(screen.getByRole("radio", { name: "" })).not.toBeChecked();
    expect(screen.getByRole("option", { name: /Pilih Salah Satu Program/ })).toBeTruthy();
    expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("");
  });
});
