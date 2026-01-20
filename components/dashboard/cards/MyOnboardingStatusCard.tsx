// MyOnboardingStatusCard.tsx
type OnboardingStep = {
  id: string;
  label: string;
  status: 'completed' | 'pending';
};

interface MyOnboardingStatusCardProps {
  completedCount: number;
  totalCount: number;
  steps: OnboardingStep[];
}

const dotClass: Record<OnboardingStep['status'], string> = {
  completed: 'bg-gray-900',
  pending: 'bg-gray-300',
};

const textClass: Record<OnboardingStep['status'], string> = {
  completed: 'text-gray-700',
  pending: 'text-gray-900',
};

export default function MyOnboardingStatusCard({
  completedCount,
  totalCount,
  steps,
}: MyOnboardingStatusCardProps) {
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <section className="rounded-xl border bg-white">
      {/* Header */}
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Onboarding status
        </h2>
        <p className="mt-1 text-xs text-gray-500">
          {completedCount} of {totalCount} steps completed
        </p>

        {/* Progress bar (supporting, not primary) */}
        <div className="mt-3">
          <div
            className="h-2 w-full rounded-full bg-gray-100"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-2 rounded-full bg-gray-900"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step list */}
      <ul className="divide-y border-t">
        {steps.map((step) => (
          <li key={step.id} className="px-5 py-3">
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${dotClass[step.status]}`}
              />
              <p className={`text-sm ${textClass[step.status]}`}>
                {step.label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
