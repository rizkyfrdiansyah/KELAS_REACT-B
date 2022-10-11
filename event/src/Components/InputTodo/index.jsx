import React from "react";

/** Styles */
import styles from "./style.module.css";

class InputTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  onChangeInput = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = () => {
    this.state.input === "" ? alert("Jangan dikosongin, isi dulu yaa") : this.props.addTodoItem(this.state.input);

    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <form className={styles.form_input}>
        <input className={styles.input_text_todo} type="text" value={this.state.input} placeholder="Add todo..." onChange={this.onChangeInput} />
        <button className={styles.btn_submit_todo} type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default InputTodo;
