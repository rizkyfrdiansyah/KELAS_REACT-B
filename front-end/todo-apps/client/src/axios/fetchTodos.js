import axios from "axios";
import Swal from "sweetalert2";

const URL = "http://localhost:3000";

const getTodos = async (cb) => {
  try {
    let todos = await axios({
      method: "get",
      url: `${URL}/todos`,
    });
    cb(todos.data);
  } catch (err) {
    console.log(err);
  }
};

const addTodo = async (title, cb) => {
  try {
    let result = await axios({
      method: "post",
      url: `${URL}/todos`,
      data: {
        title,
        completed: false,
      },
    });
    Swal.fire("Add Todo fire", "Todo has been added.", "success");
    getTodos((result) => {
      cb(result);
    });
    // console.log(result)
  } catch (err) {
    console.log(err);
  }
};

export { getTodos, addTodo };
