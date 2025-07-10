
/*
import { create } from 'zustand'

const useAuthStore = create((set)=>({
    token: null,
    setToken: (token)=>set({token}),
    clearToken: ()=>set({token: null}),
}))

export default useAuthStore;

*/

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      user: null,

      // Setters
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),

      // Logout
      clearToken: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-storage', // Key in localStorage
      partialize: (state) => ({ token: state.token, user: state.user }), // optional: store only what's needed
    }
  )
);

export default useAuthStore;
