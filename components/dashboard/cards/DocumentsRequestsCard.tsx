interface DocumentsRequestsCardProps {
  submittedCount: number;
  pendingCount: number;
}

export default function DocumentsRequestsCard({
  submittedCount,
  pendingCount,
}: DocumentsRequestsCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Documents & requests
        </h2>

        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Submitted
            </span>
            <span className="text-sm font-medium text-gray-900">
              {submittedCount}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">
              Pending approval
            </span>
            <span className="text-sm font-medium text-gray-900">
              {pendingCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
