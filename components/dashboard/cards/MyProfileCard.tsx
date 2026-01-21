// MyProfileCard.tsx
interface MyProfileCardProps {
  name: string;
  team: string;
  status: 'Active' | 'Inactive';
}

const statusClass: Record<MyProfileCardProps['status'], string> = {
  Active: 'text-green-600',
  Inactive: 'text-gray-400',
};

export default function MyProfileCard({
  name,
  team,
  status,
}: MyProfileCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          My profile
        </h2>

        <div className="mt-3">
          <p className="text-sm font-medium text-gray-900">
            {name}
          </p>

          <p className="mt-1 text-xs text-gray-500">
            {team} team
          </p>

          <p
            className={`mt-2 text-xs font-medium ${statusClass[status]}`}
          >
            {status}
          </p>
        </div>
      </div>
    </section>
  );
}
