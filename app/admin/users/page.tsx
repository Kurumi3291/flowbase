import { redirect } from 'next/navigation';
import { useSessionStore } from '@/stores/sessionStore';

export default function AdminUsersPage() {
  const role = useSessionStore.getState().user?.role;

  if (role !== 'admin') {
    redirect('/not-authorized');
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">User Management</h1>
      <p className="mt-2 text-sm text-gray-500">
        Admin-only user management page.
      </p>
    </div>
  );
}
