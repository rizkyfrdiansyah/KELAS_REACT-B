import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoTaskReducer = createSlice({
  name: "todoTask",
  initialState,
  reducers: {
    addTodoTask: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodoTask: (state, action) => {
      // state.todoList.splice(action.payload, 1);
      const newTodoList = [...state.todoList];
      state.todoList = newTodoList.filter((todo, index) => todo.id !== action.payload);
    },
    changeStatusTodoTask: (state, action) => {
      const todos = [...state.todoList];
      const newTodos = todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      state.todoList = newTodos;
    },
  },
});

export const { addTodoTask, removeTodoTask, changeStatusTodoTask } = todoTaskReducer.actions;

export default todoTaskReducer.reducer;
