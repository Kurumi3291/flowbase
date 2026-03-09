'use client';

import Link from 'next/link';
import { useSessionStore } from '@/stores/sessionStore';

const commonNavItems = [
  { label: "Overview", href: "/dashboard" },
];

const adminNavItems = [
  { label: "Employees", href: "/admin/employees" },
];

export default function Sidebar() {
  const role = useSessionStore((s) => s.user?.userRole);

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
      <nav className="p-4">
        <ul className="space-y-1">

          {/* Common navigation */}
          {commonNavItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Admin navigation */}
          {role === 'admin' &&
            adminNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}

        </ul>
      </nav>
    </aside>
  );
}