import { createSlice } from "@reduxjs/toolkit";

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;

      payload.e.preventDefault();

      payload.input === ""
        ? alert("Jangan dikosongin, isi dulu yaa")
        : (state.todos = [
            ...state.todos,
            {
              id: uuidv4(),
              title: action.payload.input,
              completed: false,
            },
          ]);
    },
    deleteTodo: (state, action) => {
      const { payload } = action;

      const newListTodo = state.todos.filter((todo) => todo.id !== payload);

      state.todos = newListTodo;
    },
    checkedTodo: (state, action) => {
      const { payload } = action;

      const newListTodo = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            id: todo.id,
            title: todo.title,
            completed: payload.checked,
          };
        } else {
          return {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
          };
        }
      });

      state.todos = newListTodo;
    },
  },
});

export const { addTodo, deleteTodo, checkedTodo } = todosSlice.actions;

export default todosSlice.reducer;
