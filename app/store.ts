import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";
import { loadState, saveState } from "./utils/localStorage";
import darkModeReducer from './todo/darkModeSlice';

const preloadedState = {
  todo: loadState() || { todos: [] },
};

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    darkMode: darkModeReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().todo);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
