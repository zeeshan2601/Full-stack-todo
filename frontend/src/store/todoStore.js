import { create } from 'zustand'

const useTodoStore = create((set) => ({
    todos: [],
    setTodos: (newTodos) => set({ todos: newTodos }),
    // Optionally, you can add more actions here
}))

export default useTodoStore;