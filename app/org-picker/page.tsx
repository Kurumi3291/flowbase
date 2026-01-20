'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSessionStore } from '@/stores/sessionStore';

type Org = {
  id: string;
  name: string;
};

export default function OrgPickerPage() {
  const router = useRouter();
  const selectOrg = useSessionStore((s) => s.selectOrg);

  const [orgs, setOrgs] = useState<Org[]>([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const res = await fetch('/api/orgs');
      const data = await res.json();
      setOrgs(data);
    };

    fetchOrgs();
  }, []);

  const handleSelect = (orgId: string) => {
    const org = orgs.find((o) => o.id === orgId);
    if (!org) return;

    selectOrg(org);
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">
            Select a workspace
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Choose the organization you want to continue with
          </p>

          <ul className="mt-6 space-y-2">
            {orgs.map((org) => (
              <li key={org.id}>
                <button
                  onClick={() => handleSelect(org.id)}
                  className="w-full rounded-md border border-gray-200 px-4 py-2 text-left text-sm text-gray-900 hover:bg-gray-50"
                >
                  {org.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
