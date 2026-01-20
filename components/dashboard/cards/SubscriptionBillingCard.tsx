interface SubscriptionBillingCardProps {
  plan: string;
  trialRemainingDays?: number;
  nextInvoice: string;
  onManage?: () => void;
}

export default function SubscriptionBillingCard({
  plan,
  trialRemainingDays,
  nextInvoice,
  onManage,
}: SubscriptionBillingCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Subscription & billing
        </h2>

        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <p>
            Current plan: <span className="font-medium text-gray-900">{plan}</span>
          </p>

          {trialRemainingDays !== undefined && (
            <p>Trial period: {trialRemainingDays} days remaining</p>
          )}

          <p>Next invoice: {nextInvoice}</p>
        </div>

        <div className="mt-4">
          <button
            onClick={onManage}
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            Manage subscription
          </button>
        </div>
      </div>
    </section>
  );
}
