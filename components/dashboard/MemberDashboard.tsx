'use client';

import { useSessionStore } from '@/stores/sessionStore';

export default function MemberDashboard() {
  const user = useSessionStore((state) => state.user);

  if (!user) {
    return <div className="text-sm text-gray-500">User not found.</div>;
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-gray-900">My Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your employee information.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <InfoCard label="Name" value={user.name} />
        <InfoCard label="Email" value={user.email} />
        <InfoCard label="Department" value={user.department} />
        <InfoCard label="Job Title" value={user.jobTitle} />
        <InfoCard label="Joined Date" value={user.joinedDate} />
        <InfoCard label="Status" value={user.status} />
      </section>
    </div>
  );
}

type InfoCardProps = {
  label: string;
  value: string;
};

function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-lg font-semibold text-gray-900">{value}</p>
    </div>
  );
}