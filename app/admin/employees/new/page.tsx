//app/admin/employees/new/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { EmployeeStatus, UserRole } from '@/types/employee';

type FormState = {
  name: string;
  email: string;
  department: string;
  jobTitle: string;
  joinedDate: string;
  status: EmployeeStatus;
  userRole: UserRole;
};

export default function NewEmployeePage() {
  const router = useRouter();

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    department: '',
    jobTitle: '',
    joinedDate: '',
    status: 'active',
    userRole: 'employee',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const newEmployee = {
        id: crypto.randomUUID(),
        ...form,
      };

      const res = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEmployee),
      });

      if (!res.ok) {
        throw new Error('Failed to create employee');
      }

      router.push('/admin/employees');
    } catch (error) {
      console.error('Failed to create employee:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Add Employee</h1>
        <p className="mt-1 text-sm text-gray-500">
          Create a new employee record.
        </p>
      </div>

      <div className="max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
          />

          <Input
            label="Job Title"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
          />

          <Input
            label="Joined Date"
            name="joinedDate"
            type="date"
            value={form.joinedDate}
            onChange={handleChange}
          />

          <div>
            <label className="block text-sm text-gray-500">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2"
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-500">User Role</label>
            <select
              name="userRole"
              value={form.userRole}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2"
            >
              <option value="employee">employee</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Saving...' : 'Save Employee'}
            </button>

            <button
              type="button"
              onClick={() => router.push('/admin/employees')}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = 'text',
}: InputProps) {
  return (
    <div>
      <label className="block text-sm text-gray-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2"
      />
    </div>
  );
}