interface PendingApprovalsCardProps {
  invitationCount: number;
  accessRequestCount: number;
  onReview?: () => void;
}

export default function PendingApprovalsCard({
  invitationCount,
  accessRequestCount,
  onReview,
}: PendingApprovalsCardProps) {
  const total = invitationCount + accessRequestCount;

  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Pending approvals
        </h2>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>{invitationCount} member invitations</p>
          <p>{accessRequestCount} access requests</p>
        </div>

        <p className="mt-2 text-xs text-gray-500">
          {total} items require your review
        </p>

        <div className="mt-4">
          <button
            onClick={onReview}
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            Review approvals
          </button>
        </div>
      </div>
    </section>
  );
}
