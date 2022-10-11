/** Styles */
import styles from "./style.module.css";

const Form = ({ inputs, setInputs, errorMessage, setErrorMessage, suratKesungguhan }) => {
  const handleInput = (e) => {
    const name = e.target.name;

    const value = name === "pendidikan" ? inputs.pendidikan : e.target.value;

    const nameRegex = /^[A-Za-z ]*$/;

    const emailRegex = /(.+)@(.+)/;

    const handphoneRegex = /^\d{9,14}$/;

    if (name === "nama") {
      if (!nameRegex.test(value) && value !== "") {
        setErrorMessage({
          ...errorMessage,
          [name]: "Nama Lengkap Harus Berupa Huruf",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          [name]: "",
        });
      }
    }

    if (name === "email") {
      if (!emailRegex.test(value) && value !== "") {
        setErrorMessage({
          ...errorMessage,
          [name]: "Email Tidak Sesuai",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          [name]: "",
        });
      }
    }

    if (name === "noHandphone") {
      if (!handphoneRegex.test(value) && value !== "") {
        setErrorMessage({
          ...errorMessage,
          [name]: "No Handphone Tidak Sesuai",
        });
      } else {
        setErrorMessage({
          ...errorMessage,
          [name]: "",
        });
      }
    }

    if (name === "pendidikan") {
      if (e.target.value === "IT") {
        value.it = true;
        value.nonIt = false;
      } else {
        value.it = false;
        value.nonIt = true;
      }
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errorMessage.nama === "" && errorMessage.email === "" && errorMessage.noHandphone === "") {
      alert(`Data Pendaftar "${inputs.nama}" Berhasil Diterima`);
    } else alert(`Data Pendaftar Tidak Sesuai`);

    handleReset();
  };

  const handleReset = () => {
    setInputs({
      nama: "",
      email: "",
      noHandphone: "",
      pendidikan: {
        it: false,
        nonIt: false,
      },
      kelas: "",
      harapan: "",
    });

    setErrorMessage({
      nama: "",
      email: "",
      noHandphone: "",
    });

    suratKesungguhan.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Pendaftaran Peserta Coding Bootcamp</h1>

      <div className={styles.form_input}>
        <label>Nama Lengkap:</label>
        <br />
        <input type="text" value={inputs.nama} name="nama" onChange={handleInput} required />
      </div>

      <div className={styles.form_input}>
        <label>Email:</label>
        <br />
        <input type="email" value={inputs.email} name="email" onChange={handleInput} required />
      </div>

      <div className={styles.form_input}>
        <label>No Handphone:</label>
        <br />
        <input type="text" value={inputs.noHandphone} name="noHandphone" onChange={handleInput} required />
      </div>

      <div className={styles.form_input}>
        <label>Latar Belakang Pendidikan:</label>
        <br />
        <input className={styles.radio} type="radio" name="pendidikan" value="IT" onChange={handleInput} checked={inputs.pendidikan.it} required />
        <label>IT</label>
        <input className={styles.radio} type="radio" name="pendidikan" value="NonIT" onChange={handleInput} checked={inputs.pendidikan.nonIt} />
        <label>Non IT</label>
      </div>

      <div className={styles.form_input}>
        <label>Kelas Coding yang Dipilih:</label>
        <br />
        <select value={inputs.kelas} name="kelas" onChange={handleInput} required>
          <option value="">Pilih Salah Satu Program</option>
          <option value="golang">Coding Backend with Golang</option>
          <option value="react">Coding Frontend with ReactJS</option>
          <option value="fullstack">Fullstack Developer</option>
        </select>
      </div>

      <div className={styles.form_input}>
        <label>Foto Surat Kesungguhan:</label>
        <br />
        <input className={styles.file} type="file" ref={suratKesungguhan} required />
      </div>

      <div className={styles.form_input}>
        <label>Harapan Untuk Coding Bootcamp Ini:</label>
        <br />
        <textarea value={inputs.harapan} name="harapan" rows={5} onChange={handleInput} />
      </div>

      <span className={styles.error}>{errorMessage.nama}</span>
      <br />
      <span className={styles.error}>{errorMessage.email}</span>
      <br />
      <span className={styles.error}>{errorMessage.noHandphone}</span>
      <br />

      <button className={`${styles.btn} ${styles.btn_submit}`} type="submit">
        Submit
      </button>
      <button className={`${styles.btn} ${styles.btn_reset}`} type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default Form;
