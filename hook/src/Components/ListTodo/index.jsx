import style from "./style.module.css";

const ListTodo = (props) => {
  return (
    <div className={style.ListWrapper}>
      <div className={style.ListItem}>
        <input
          type="checkbox"
          defaultChecked={props.data.completed}
          onChange={() => {
            props.handleChange(props.data);
          }}
        />
        {props.data.completed ? (
          <p>
            <del>{props.data.title}</del>
          </p>
        ) : (
          <p>{props.data.title}</p>
        )}
      </div>
      <button
        onClick={() => {
          props.handleDel(props.data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListTodo;
