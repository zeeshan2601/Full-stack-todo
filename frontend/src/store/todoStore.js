import { create } from 'zustand'

const useTodoStore = create((set, get) => ({
    todos: [],
    setTodos: (newTodos) => set({todos: [...get().todos, ...newTodos]}),
    // Optionally, you can add more actions here
}))

export default useTodoStore;