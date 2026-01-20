interface ActivityItem {
  id: string;
  label: string;
  date: string;
}

interface RecentActivityCardProps {
  activities: ActivityItem[];
}

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Recent activity
        </h2>
      </div>

      <ul className="divide-y border-t">
        {activities.map((activity) => (
          <li key={activity.id} className="px-5 py-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700">
                {activity.label}
              </p>
              <span className="text-xs text-gray-400">
                {activity.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
