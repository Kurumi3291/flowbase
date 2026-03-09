'use client';

import { useEffect, useMemo, useState } from 'react';
import type { Employee } from '@/types/employee';

export default function AdminDashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch('/api/employees');

        if (!res.ok) {
          throw new Error('Failed to fetch employees');
        }

        const data: Employee[] = await res.json();
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (employee) => employee.status === 'active'
  ).length;
  const inactiveEmployees = employees.filter(
    (employee) => employee.status === 'inactive'
  );

  const departmentBreakdown = useMemo(() => {
    const departmentMap = employees.reduce<Record<string, number>>(
      (acc, employee) => {
        acc[employee.department] = (acc[employee.department] || 0) + 1;
        return acc;
      },
      {}
    );

    return Object.entries(departmentMap)
      .map(([department, count]) => ({
        department,
        count,
      }))
      .sort((a, b) => b.count - a.count || a.department.localeCompare(b.department));
  }, [employees]);

  const recentHires = useMemo(() => {
    return [...employees]
      .sort(
        (a, b) =>
          new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime()
      )
      .slice(0, 5);
  }, [employees]);

  if (isLoading) {
    return <div className="text-sm text-gray-500">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of employee data and organization status.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-4">
        <DashboardCard title="Total Employees" value={totalEmployees.toString()} />
        <DashboardCard title="Active Employees" value={activeEmployees.toString()} />
        <DashboardCard title="Inactive Employees" value={inactiveEmployees.length.toString()} />
        <DashboardCard title="Departments" value={departmentBreakdown.length.toString()} />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Department Breakdown
            </h2>
            <p className="text-sm text-gray-500">
              Number of employees in each department.
            </p>
          </div>

          <div className="space-y-3">
            {departmentBreakdown.map((item) => (
              <div
                key={item.department}
                className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <span className="text-sm font-medium text-gray-900">
                  {item.department}
                </span>
                <span className="text-sm text-gray-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Inactive Employees
            </h2>
            <p className="text-sm text-gray-500">
              Employees currently marked as inactive.
            </p>
          </div>

          {inactiveEmployees.length === 0 ? (
            <p className="text-sm text-gray-500">No inactive employees.</p>
          ) : (
            <div className="space-y-3">
              {inactiveEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  <p className="font-medium text-gray-900">{employee.name}</p>
                  <p className="text-sm text-gray-600">
                    {employee.jobTitle} · {employee.department}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Hires</h2>
          <p className="text-sm text-gray-500">
            Newly joined employees in descending order.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-gray-200 text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Department</th>
                <th className="px-4 py-3 font-medium">Job Title</th>
                <th className="px-4 py-3 font-medium">Joined Date</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentHires.map((employee) => (
                <tr key={employee.id} className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-900">{employee.name}</td>
                  <td className="px-4 py-3 text-gray-700">{employee.department}</td>
                  <td className="px-4 py-3 text-gray-700">{employee.jobTitle}</td>
                  <td className="px-4 py-3 text-gray-700">{employee.joinedDate}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        employee.status === 'active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
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
      </section>
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  value: string;
};

function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}