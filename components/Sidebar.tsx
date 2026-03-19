//components/Sidebar.tsx
'use client';

import Link from 'next/link';
import { useSessionStore } from '@/stores/sessionStore';

const adminNavItems = [
  { label: "Overview", href: "/admin/dashboard" },
  { label: "Employees", href: "/admin/employees" },
];

const employeeNavItems = [
  { label: "Overview", href: "/employee/dashboard" },
  { label: "My Profile", href: "/employee/profile" },
];

export default function Sidebar() {
  const role = useSessionStore((s) => s.user?.userRole);

  const navItems =
    role === 'admin'
      ? adminNavItems
      : employeeNavItems;

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
      <nav className="p-4">
        <ul className="space-y-1">

          {navItems.map((item) => (
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