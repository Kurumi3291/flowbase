'use client';

import { useRouter } from 'next/navigation';
import { useSessionStore } from '@/stores/sessionStore';
import { mockUserAdmin, mockUserMember } from '@/mocks/users';

export default function LoginPage() {
  const router = useRouter();
  const login = useSessionStore((s) => s.login);

  const handleLoginWithUser = (user: typeof mockUserAdmin) => {
    login(user);

    if (user.orgIds.length > 1) {
      router.push('/org-picker');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-900">
            Flowbase
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Sign in to your workspace
          </p>

          <div className="my-6 h-px bg-gray-200" />

          <button
            onClick={() => handleLoginWithUser(mockUserAdmin)}
            className="w-full rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Continue as Admin
          </button>

          <button
            onClick={() => handleLoginWithUser(mockUserMember)}
            className="mt-3 w-full rounded-md border border-gray-300 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
          >
            Continue as Member
          </button>

          <p className="mt-4 text-xs text-gray-400 text-center">
            Demo login · No credentials required
          </p>
        </div>
      </div>
    </div>
  );
}
