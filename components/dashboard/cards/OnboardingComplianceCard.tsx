interface OnboardingComplianceCardProps {
  onboardingCount: number;
  missingDocuments: number;
  note: string;
}

export default function OnboardingComplianceCard({
  onboardingCount,
  missingDocuments,
  note,
}: OnboardingComplianceCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Onboarding & compliance
        </h2>

        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <p>New hires onboarding: {onboardingCount}</p>
          <p>Required documents missing: {missingDocuments}</p>
        </div>

        <p className="mt-3 text-xs text-yellow-700">
          {note}
        </p>
      </div>
    </section>
  );
}
