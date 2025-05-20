"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import DarkModeManager from '@/app/components/DarkModeManager';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DarkModeManager />
      {children}
    </Provider>
  );
}
