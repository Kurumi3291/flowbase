//page.tsx
'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSessionStore } from '@/stores/sessionStore';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import MemberDashboard from '@/components/dashboard/MemberDashboard';

export default function DashboardPage() {
  const user = useSessionStore((s) => s.user);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-sm text-gray-500">
        Loading user...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-8">
          {user.userRole === 'admin' ? (
            <AdminDashboard />
          ) : (
            <MemberDashboard />
          )}
        </main>
      </div>
    </div>
  );
}
