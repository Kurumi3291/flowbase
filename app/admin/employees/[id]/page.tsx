'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSessionStore } from '@/stores/sessionStore';
import type { Employee } from '@/types/employee';

export default function EmployeeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const role = useSessionStore((s) => s.user?.userRole);

  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (role && role !== 'admin') {
      router.replace('/not-authorized');
      return;
    }

    const fetchEmployee = async () => {
      try {
        const res = await fetch('/api/employees');
        const data: Employee[] = await res.json();

        const employeeId = Array.isArray(params.id) ? params.id[0] : params.id;
        const foundEmployee = data.find((emp) => emp.id === employeeId);

        if (!foundEmployee) {
          setEmployee(null);
          return;
        }

        setEmployee(foundEmployee);
      } catch (error) {
        console.error('Failed to fetch employee:', error);
      } finally {
        setLoading(false);
      }
    };

    if (role === 'admin') {
      fetchEmployee();
    }
  }, [params.id, role, router]);

  if (!role) {
    return <div className="p-6">Checking session...</div>;
  }

  if (loading) {
    return <div className="p-6">Loading employee details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                Employee Detail
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                View employee information.
                </p>
            </div>

            <div className="flex gap-2">
                {employee && (
                <Link
                    href={`/admin/employees/${employee.id}/edit`}
                    className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
                >
                    Edit
                </Link>
                )}

                <Link
                href="/admin/employees"
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                Back to Employees
                </Link>
            </div>
            </div>

          {!employee ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-600">Employee not found.</p>
            </div>
          ) : (
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="mt-1 text-base text-gray-900">{employee.name}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-base text-gray-900">{employee.email}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="mt-1 text-base text-gray-900">{employee.department}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Job Title</p>
                  <p className="mt-1 text-base text-gray-900">{employee.jobTitle}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Joined Date</p>
                  <p className="mt-1 text-base text-gray-900">{employee.joinedDate}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="mt-1">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        employee.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">User Role</p>
                  <p className="mt-1 text-base capitalize text-gray-900">
                    {employee.userRole}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}