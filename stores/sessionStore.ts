import { create } from 'zustand';
import { User } from '@/types/user';
import { Org } from '@/types/org';

type SessionState = {
  isAuthenticated: boolean;
  user: User | null;
  selectedOrg: Org | null;

  login: (user: User) => void;
  logout: () => void;
  selectOrg: (org: Org) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  isAuthenticated: false,
  user: null,
  selectedOrg: null,

  login: (user) =>
    set({
      isAuthenticated: true,
      user,
    }),

  logout: () =>
    set({
      isAuthenticated: false,
      user: null,
      selectedOrg: null,
    }),

  selectOrg: (org) =>
    set({
      selectedOrg: org,
    }),
}));
