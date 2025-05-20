"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { 
  addTodo,
  setTodos, 
} from "../todo/todoSlice";
import TodoItem from "./TodoItem";

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  isEditing: boolean;
  createdAt: string;
};

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      dispatch(setTodos(JSON.parse(stored)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch(addTodo({ id: Date.now().toString(), text: input.trim() }));
    setInput("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700">
        Todo App Test
      </h1>

      <div className= " text-black flex justify-center mb-4 space-x-4">
        {["all", "completed", "pending"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as typeof filter)}
            className={`px-4 py-2 rounded ${
              filter === f ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {f === "all"
              ? "Tất cả"
              : f === "completed"
              ? "Hoàn thành"
              : "Chưa hoàn thành"}
          </button>
        ))}
      </div>

      <div className="flex mb-6">
        <input
          type="text"
          className="text-black flex-grow border border-indigo-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          placeholder="Nhập công việc..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />

        <button
          onClick={handleAdd}
          className="ml-1 bg-blue-600 text-white px-6 rounded-r-lg hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg"
          aria-label="Thêm công việc"
        >
          Thêm
        </button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
