import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  isEditing: boolean;
};

export interface TodoState {
  todos: Todo[];
}


const initialState: TodoState = {
  todos: [] ,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<{ id: string; text: string }>) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
        isEditing: false,
      });
    }
    ,
    toggleComplete(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    startEditing(state, action: PayloadAction<string>) {
      state.todos.forEach((t) => {
        if (t.id === action.payload) t.isEditing = true;
        else t.isEditing = false;
      });
    },
    saveEdit(state, action: PayloadAction<{ id: string; text: string }>) {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.isEditing = false;
      }
    },
    cancelEditing(state, action: PayloadAction<string>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.isEditing = false;
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    setTodos(state, action: PayloadAction<Todo[]>) {
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  startEditing,
  saveEdit,
  cancelEditing,
  deleteTodo,
  setTodos,

} = todoSlice.actions;

export default todoSlice.reducer;
