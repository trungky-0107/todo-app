import TodoList from "./components/TodoList";
import DarkModeToggle from "./components/DarkModeToggle";
export default function Page() {
  return (
  <main className="min-h-screen some-component">
  <DarkModeToggle />
  <TodoList />
</main>
);
}
