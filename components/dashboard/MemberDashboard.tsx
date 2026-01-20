import MyTasksCard from './cards/MyTasksCard';
import MyOnboardingStatusCard from './cards/MyOnboardingStatusCard';
import MyProfileCard from './cards/MyProfileCard';
import DocumentsRequestsCard from './cards/DocumentsRequestsCard';
import RecentActivityCard from './cards/RecentActivityCard';
import HelpResourcesCard from './cards/HelpResourcesCard';

import { memberTasks } from '@/mocks/tasks';
import { memberOnboarding } from '@/mocks/onboarding';
import { memberProfile } from '@/mocks/profile';
import { memberDocuments } from '@/mocks/documents';
import { memberActivity } from '@/mocks/activity';
import { helpResources } from '@/mocks/resources';

export default function MemberDashboard() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Primary */}
      <div className="lg:col-span-2">
        <MyTasksCard tasks={memberTasks} />
      </div>

      {/* Context */}
      <MyOnboardingStatusCard
        completedCount={memberOnboarding.completedCount}
        totalCount={memberOnboarding.totalCount}
        steps={memberOnboarding.steps}
      />

      {/* Secondary */}
      <MyProfileCard
        name={memberProfile.name}
        role={memberProfile.role}
        team={memberProfile.team}
        status={memberProfile.status}
      />

      <DocumentsRequestsCard
        submittedCount={memberDocuments.submittedCount}
        pendingCount={memberDocuments.pendingCount}
      />

      {/* Tertiary */}
      <RecentActivityCard activities={memberActivity} />
      <HelpResourcesCard resources={helpResources} />
    </div>
  );
}
