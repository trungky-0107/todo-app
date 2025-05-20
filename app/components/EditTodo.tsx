"use client";
import React, { useState } from "react";
import type { Todo } from "../todo/todoSlice";

type Props = {
  todo: Todo;
  dispatch: React.Dispatch<any>;
};

export default function EditTodo({ todo, dispatch }: Props) {
    const [editText, setEditText] = useState(todo.text);
  
    const handleSave = () => {
      if (editText.trim() === "") return;
      dispatch({ type: "todo/saveEdit", payload: { id: todo.id, text: editText.trim() } });
    };
  
    return (
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="text-black flex-grow border border-indigo-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") dispatch({ type: "todo/cancelEditing", payload: todo.id });
          }}
          aria-label="Chỉnh sửa công việc"
        />
        <button
          onClick={handleSave}
          className="text-green-700 mr-3 hover:text-green-800 font-semibold transition-colors"
          aria-label="Lưu chỉnh sửa"
        >
          Lưu
        </button>
        <button
          onClick={() => dispatch({ type: "todo/cancelEditing", payload: todo.id })}
          className="text-gray-600 hover:text-gray-700 font-semibold transition-colors"
          aria-label="Huỷ chỉnh sửa"
        >
          Huỷ
        </button>
      </div>
    );
  }
  