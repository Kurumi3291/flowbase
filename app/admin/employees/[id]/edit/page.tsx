'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSessionStore } from '@/stores/sessionStore';
import type { Employee } from '@/types/employee';

export default function EditEmployeePage() {
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
    return <div className="p-6">Loading employee...</div>;
  }

  if (!employee) {
    return <div className="p-6">Employee not found.</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // mock update
    console.log('Updated employee:', employee);

    router.push(`/admin/employees/${employee.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-8">

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Edit Employee
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Update employee information.
            </p>
          </div>

          <div className="max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input
                label="Name"
                name="name"
                value={employee.name}
                onChange={handleChange}
              />

              <Input
                label="Email"
                name="email"
                value={employee.email}
                onChange={handleChange}
              />

              <Input
                label="Department"
                name="department"
                value={employee.department}
                onChange={handleChange}
              />

              <Input
                label="Job Title"
                name="jobTitle"
                value={employee.jobTitle}
                onChange={handleChange}
              />

              <div>
                <label className="block text-sm text-gray-500">Status</label>

                <select
                  name="status"
                  value={employee.status}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2"
                >
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>

              <button
                type="submit"
                className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
              >
                Save Changes
              </button>

            </form>
          </div>

        </main>
      </div>
    </div>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, value, onChange }: InputProps) {
  return (
    <div>
      <label className="block text-sm text-gray-500">{label}</label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2"
      />
    </div>
  );
}