"use client";
import React, { useState } from "react";
import type { Todo } from "../todo/todoSlice";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, startEditing } from "../todo/todoSlice";
import EditTodo from "./EditTodo";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const dispatch = useDispatch();

  if (todo.isEditing) {
    return <EditTodo todo={todo} dispatch={dispatch} />;
  }

  return (
    <li
      className={`text-black flex items-center justify-between mb-3 p-3 rounded-lg border transition-colors ${
        todo.completed ? "bg-green-100 border-green-400" : "bg-white border-gray-300"
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
          className="mr-3"
        />
        <span className="select-none text-black">{todo.text}</span>
        {todo.completed && (
          <span className="ml-2 text-green-600 font-semibold">Hoàn thành</span>
        )}
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => dispatch(startEditing(todo.id))}
          className="text-blue-600 hover:text-blue-800 font-semibold"
          aria-label="Sửa công việc"
        >
          Sửa
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-red-500 hover:text-red-700 font-bold"
          aria-label="Xóa công việc"
        >
          Xoá
        </button>
      </div>
    </li>
  );
}
