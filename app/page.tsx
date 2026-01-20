import { redirect } from 'next/navigation';
import { useSessionStore } from '@/stores/sessionStore';

export default function Page() {
  const { isAuthenticated, user, selectedOrg } =
    useSessionStore.getState();

  // 1. Not logged in
  if (!isAuthenticated) {
    redirect('/login');
  }

  // 2. Logged in but no org selected
  if (user && user.orgIds.length > 1 && !selectedOrg) {
    redirect('/org-picker');
  }

  // 3. Logged in and ready
  redirect('/dashboard');
}
