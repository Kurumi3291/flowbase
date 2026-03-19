//components/dashboard/EmployeeDashboard.tsx
'use client';

import Link from 'next/link';
import { useSessionStore } from '@/stores/sessionStore';

export default function EmployeeDashboard() {
  const user = useSessionStore((s) => s.user);

  if (!user) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-500 shadow-sm">
        User not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {user.name}
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Here is a quick overview of your profile.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Department</p>
          <p className="mt-2 text-base font-medium text-gray-900">
            {user.department}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Job Title</p>
          <p className="mt-2 text-base font-medium text-gray-900">
            {user.jobTitle}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Status</p>
          <div className="mt-2">
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                user.status === 'active'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {user.status}
            </span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">My Profile</h2>
        <p className="mt-2 text-sm text-gray-500">
          View your full profile information, including email and joined date.
        </p>

        <div className="mt-4">
          <Link
            href="/employee/profile"
            className="inline-flex rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            View My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}