
type Todo = {
  id: string;
  text: string;
  completed: boolean;
  isEditing: boolean;
};

interface TodoState {
  todos: Todo[];
}
export const loadState = () => {
  if (typeof window === "undefined") return undefined;
  try {
    const serializedState = localStorage.getItem("todos");
    if (!serializedState) return undefined;
    const todos = JSON.parse(serializedState);
    if (Array.isArray(todos)) {
      return { todos };  
    }
    return todos;
  } catch {
    return undefined;
  }
};

export const saveState = (state: TodoState) => {
  try {
    const serializedState = JSON.stringify(state.todos); 
    localStorage.setItem("todos", serializedState);
  } catch (err) {
    console.error("Lỗi save state vào localStorage:", err);
  }
};

