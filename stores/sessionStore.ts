import { create } from 'zustand'
import { Employee } from '@/types/employee'

type SessionState = {
  isAuthenticated: boolean
  user: Employee | null

  login: (user: Employee) => void
  logout: () => void
}

export const useSessionStore = create<SessionState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
    }),
}))