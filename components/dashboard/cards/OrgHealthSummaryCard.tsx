interface OrgHealthSummaryCardProps {
  activeMembers: number;
  pendingIssues: number;
  status: 'Healthy' | 'Warning' | 'Issue';
  description: string;
}

const statusDot: Record<OrgHealthSummaryCardProps['status'], string> = {
  Healthy: 'bg-green-500',
  Warning: 'bg-yellow-500',
  Issue: 'bg-red-500',
};

const statusText: Record<OrgHealthSummaryCardProps['status'], string> = {
  Healthy: 'text-green-700',
  Warning: 'text-yellow-700',
  Issue: 'text-red-700',
};

export default function OrgHealthSummaryCard({
  activeMembers,
  pendingIssues,
  status,
  description,
}: OrgHealthSummaryCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Organization health
        </h2>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>Active members: {activeMembers}</p>
          <p>Pending issues: {pendingIssues}</p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${statusDot[status]}`} />
          <p className={`text-sm font-medium ${statusText[status]}`}>
            {status}
          </p>
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {description}
        </p>
      </div>
    </section>
  );
}
