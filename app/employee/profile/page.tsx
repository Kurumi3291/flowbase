//app/employee/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import type { Employee } from '@/types/employee';

export default function EmployeeProfilePage() {
  const [profile, setProfile] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/me?role=employee');

        if (!res.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data: Employee = await res.json();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">My Profile</h1>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="text-gray-900">{profile.name}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-gray-900">{profile.email}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Department</p>
            <p className="text-gray-900">{profile.department}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Job Title</p>
            <p className="text-gray-900">{profile.jobTitle}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Joined Date</p>
            <p className="text-gray-900">{profile.joinedDate}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-gray-900">{profile.status}</p>
          </div>
        </div>
      </div>
    </>
  );
}