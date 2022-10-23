/** Styles */
import styles from "./style.module.css";

const Form = ({ inputs, setInputs, buttonText, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      {inputs.map((input, inputIdx) => (
        <div className={styles.form_item} key={inputIdx}>
          <label>{input.label}</label>
          <input type={input.type} value={input.value} onChange={(e) => setInputs([...inputs], (inputs[inputIdx].value = e.target.value))} placeholder={input.placeholder} required />
        </div>
      ))}

      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
