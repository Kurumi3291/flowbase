//app/admin/layout.tsx
'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSessionStore } from '@/stores/sessionStore';

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const user = useSessionStore((s) => s.user);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
      return;
    }

    if (user.userRole !== 'admin') {
      router.replace('/employee/dashboard');
    }
  }, [user, router]);

  if (!user || user.userRole !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-sm text-gray-500">
        Checking access...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex min-h-[calc(100vh-56px)] flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6 sm:p-8">{children}</main>
      </div>
    </div>
  );
}