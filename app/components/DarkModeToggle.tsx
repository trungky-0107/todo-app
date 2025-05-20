'use client';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '@/app/todo/darkModeSlice';
import { RootState, AppDispatch } from '@/app/store';

export default function DarkModeToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const darkMode = useSelector((state: RootState) => state.darkMode.enabled);

  return (
    <button
    onClick={() => dispatch(toggleDarkMode())}
    className="border px-4 py-2 rounded"
  >
    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
  </button>
  );
}
