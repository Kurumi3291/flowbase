// AdminDashboard.tsx
import OrgHealthSummaryCard from './cards/OrgHealthSummaryCard';
import PendingApprovalsCard from './cards/PendingApprovalsCard';
import OnboardingComplianceCard from './cards/OnboardingComplianceCard';
import SubscriptionBillingCard from './cards/SubscriptionBillingCard';
import RecentActivityCard from './cards/RecentActivityCard';
import QuickAdminActionsCard from './cards/QuickAdminActionsCard';

import { adminRecentActivities } from '@/mocks/adminRecentActivities';

export default function AdminDashboard() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* Row 1 */}
      <OrgHealthSummaryCard
        activeMembers={42}
        pendingIssues={3}
        status="Healthy"
        description="All core systems are operating normally."
      />

      <PendingApprovalsCard
        invitationCount={2}
        accessRequestCount={1}
      />

      {/* Row 2 */}
      <OnboardingComplianceCard
        onboardingCount={2}
        missingDocuments={1}
        note="Some onboarding steps require attention."
      />

      <QuickAdminActionsCard
        actions={[
          { id: 'invite', label: 'Invite new member', primary: true },
          { id: 'roles', label: 'Manage roles' },
          { id: 'settings', label: 'Open organization settings' },
        ]}
      />

      {/* Row 3 */}
      <RecentActivityCard activities={adminRecentActivities} />

      <SubscriptionBillingCard
        plan="Pro"
        trialRemainingDays={7}
        nextInvoice="$99 / month"
      />
    </div>
  );
}
