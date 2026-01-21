'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSessionStore } from '@/stores/sessionStore';

export default function AdminUsersPage() {
  const router = useRouter();
  const role = useSessionStore((s) => s.user?.role);

  useEffect(() => {
    if (role && role !== 'admin') {
      router.replace('/not-authorized');
    }
  }, [role, router]);

  if (!role) return null;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">User Management</h1>
      <p className="mt-2 text-sm text-gray-500">
        Admin-only user management page.
      </p>
    </div>
  );
}
