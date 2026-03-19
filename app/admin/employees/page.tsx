//app/admin/employees/page.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { Employee } from '@/types/employee';

export default function AdminEmployeesPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees', {
          cache: 'no-store',
        });

        if (!res.ok) {
          throw new Error('Failed to fetch employees');
        }

        const data: Employee[] = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [pathname]);

  if (loading) {
    return <div>Loading employees...</div>;
  }

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Employee Management
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage employee information.
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Showing {employees.length} employees
          </p>
        </div>

        <Link
          href="/admin/employees/new"
          className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
        >
          Add Employee
        </Link>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Department
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Job Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="cursor-pointer hover:bg-gray-50"
                onClick={() => router.push(`/admin/employees/${employee.id}`)}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {employee.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {employee.department}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {employee.jobTitle}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                      employee.status === 'active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}