'use client';

import { useEffect, useState } from 'react';

import MyTasksCard from './cards/MyTasksCard';
import MyOnboardingStatusCard from './cards/MyOnboardingStatusCard';
import MyProfileCard from './cards/MyProfileCard';
import DocumentsRequestsCard from './cards/DocumentsRequestsCard';
import RecentActivityCard from './cards/RecentActivityCard';
import HelpResourcesCard from './cards/HelpResourcesCard';
import type { Task } from './cards/MyTasksCard';
import type { OnboardingStep } from './cards/MyOnboardingStatusCard';

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

  function getDueLabel(dueAt: string) {
    const dueDate = new Date(dueAt);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);

    const diffMs = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';

    return `Due in ${diffDays} days`;
  }

  const tasksForUI: Task[] = member.tasks.map((task) => {
    const isDone = task.status === 'done';

    return {
      id: task.id,
      title: task.title,
      priority: isDone ? 'optional' : 'normal',
      meta: isDone ? 'Completed' : getDueLabel(task.dueAt),
    };
  });

  const onboardingStepsForUI: OnboardingStep[] = member.onboarding.steps.map(
    (step) => ({
        id: step.id,
        label: step.label,
        status: step.completed ? 'completed' : 'pending',
    })
);

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <MyTasksCard tasks={tasksForUI} />
      </div>

      <MyOnboardingStatusCard
        completedCount={member.onboarding.completedCount}
        totalCount={member.onboarding.totalCount}
        steps={onboardingStepsForUI}
      />

      <MyProfileCard
        name={member.profile.name}
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
