'use client';

import { useEffect, useState } from 'react';

import MyTasksCard from './cards/MyTasksCard';
import MyOnboardingStatusCard from './cards/MyOnboardingStatusCard';
import MyProfileCard from './cards/MyProfileCard';
import DocumentsRequestsCard from './cards/DocumentsRequestsCard';
import RecentActivityCard from './cards/RecentActivityCard';
import HelpResourcesCard from './cards/HelpResourcesCard';

type MemberProfileStatus = 'Active' | 'Inactive';

type MemberDashboardData = {
  member: {
    tasks: any[];
    onboarding: {
      completedCount: number;
      totalCount: number;
      steps: any[];
    };
    profile: {
      name: string;
      role: string;
      team: string;
      status: MemberProfileStatus;
    };
    documents: {
      submittedCount: number;
      pendingCount: number;
    };
    activity: {
      id: string;
      text: string;
    }[];
    resources: {
      id: string;
      label: string;
      href: string;
    }[];
  };
};

export default function MemberDashboard() {
  const [data, setData] = useState<MemberDashboardData | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await fetch('/api/dashboard?role=member');
      const json = await res.json();
      setData(json);
    };

    fetchDashboard();
  }, []);

  if (!data) return null;

  const { member } = data;

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MyTasksCard tasks={member.tasks} />
      </div>

      <MyOnboardingStatusCard
        completedCount={member.onboarding.completedCount}
        totalCount={member.onboarding.totalCount}
        steps={member.onboarding.steps}
      />

      <MyProfileCard
        name={member.profile.name}
        role={member.profile.role}
        team={member.profile.team}
        status={member.profile.status}
      />

      <DocumentsRequestsCard
        submittedCount={member.documents.submittedCount}
        pendingCount={member.documents.pendingCount}
      />

      <RecentActivityCard
        activities={member.activity.map((a) => ({
          id: a.id,
          label: a.text,
          date: 'Today',
        }))}
      />

      <HelpResourcesCard resources={member.resources} />
    </div>
  );
}
