import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
  {
    id: 1,
    title: "Mengerjakan Exercise",
    completed: false,
  },
  {
    id: 2,
    title: "Mengerjakan Assignment",
    completed: false,
  },
  {
    id: 3,
    title: "Mengerjakan Summary",
    completed: false,
  },
  {
    id: 4,
    title: "Membaca Materi",
    completed: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialValue,
  },
  reducers: {
    hapusTodo: (state, action) => {
      state.todos = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
    },
    tambahTodo: (state, action) => {
      let indexLastItemOfArr = state.todos[state.todos.length - 1].id;
      const newTask = { id: indexLastItemOfArr + 1, ...action.payload };
      state.todos = [...state.todos, newTask];
    },
    handleChange: (state, action) => {
      const newToDoList = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      state.todos = newToDoList;
    },
  },
});

export const { hapusTodo, tambahTodo, handleChange } = todoSlice.actions;

export default todoSlice.reducer;
