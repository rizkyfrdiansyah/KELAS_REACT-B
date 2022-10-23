/** Styles */
import styles from "./style.module.css";

const FileInput = ({ name, title, accept, files, setFiles, handleClick }) => {
  return (
    <>
      <label className={styles.title}>{title}</label>

      <input
        type="file"
        accept={accept}
        className={styles.file_input}
        onChange={(e) => {
          name === "ktm" ? setFiles({ ...files, ktm: e.target.files[0] }) : setFiles({ ...files, buktiPembayaran: e.target.files[0] });
        }}
      />
      <br />

      <button type="button" className={styles.btn_upload} onClick={handleClick}>
        Upload
      </button>
      <br />
    </>
  );
};

export default FileInput;
