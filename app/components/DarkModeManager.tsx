'use client';

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function DarkModeManager() {
  const darkMode = useSelector((state: RootState) => state.darkMode.enabled);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return null;
}
