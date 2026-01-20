'use client';

import { useEffect, useState } from 'react';

import OrgHealthSummaryCard from './cards/OrgHealthSummaryCard';
import PendingApprovalsCard from './cards/PendingApprovalsCard';
import OnboardingComplianceCard from './cards/OnboardingComplianceCard';
import SubscriptionBillingCard from './cards/SubscriptionBillingCard';
import RecentActivityCard from './cards/RecentActivityCard';
import QuickAdminActionsCard from './cards/QuickAdminActionsCard';

type DashboardData = {
  admin: {
    metrics: {
      activeMembers: number;
      pendingIssues: number;
    };
    approvals: {
      invitations: number;
      accessRequests: number;
    };
    onboarding: {
      onboardingCount: number;
      missingDocuments: number;
    };
    recentActivities: {
      id: string;
      text: string;
    }[];
    billing: {
      plan: string;
      trialRemainingDays: number;
      nextInvoice: string;
    };
  };
};

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await fetch('/api/dashboard');
      const json = await res.json();
      setData(json);
    };

    fetchDashboard();
  }, []);

  if (!data) return null;

  const { admin } = data;

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <OrgHealthSummaryCard
        activeMembers={admin.metrics.activeMembers}
        pendingIssues={admin.metrics.pendingIssues}
        status="Healthy"
        description="All core systems are operating normally."
      />

      <PendingApprovalsCard
        invitationCount={admin.approvals.invitations}
        accessRequestCount={admin.approvals.accessRequests}
      />

      <OnboardingComplianceCard
        onboardingCount={admin.onboarding.onboardingCount}
        missingDocuments={admin.onboarding.missingDocuments}
        note="Some onboarding steps require attention."
      />

      <QuickAdminActionsCard
        actions={[
          { id: 'invite', label: 'Invite new member', primary: true },
          { id: 'roles', label: 'Manage roles' },
          { id: 'settings', label: 'Open organization settings' },
        ]}
      />

      <RecentActivityCard
        activities={admin.recentActivities.map((a) => ({
            id: a.id,
            label: a.text,
            date: 'Just now',
        }))}
       />

      <SubscriptionBillingCard
        plan={admin.billing.plan}
        trialRemainingDays={admin.billing.trialRemainingDays}
        nextInvoice={admin.billing.nextInvoice}
      />
    </div>
  );
}
