'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSessionStore } from '@/stores/sessionStore';
import type { Employee } from '@/types/employee';

export default function AdminEmployeesPage() {
  const router = useRouter();
  const role = useSessionStore((s) => s.user?.userRole);

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (role && role !== 'admin') {
      router.replace('/not-authorized');
      return;
    }

    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees');
        const data: Employee[] = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      } finally {
        setLoading(false);
      }
    };

    if (role === 'admin') {
      fetchEmployees();
    }
  }, [role, router]);

  if (!role) {
    return <div className="p-6">Checking session...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading employees...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Employee Management
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              View and manage employee information.
            </p>
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
        </main>
      </div>
    </div>
  );
}