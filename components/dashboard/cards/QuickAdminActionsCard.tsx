interface AdminAction {
  id: string;
  label: string;
  onClick?: () => void;
  primary?: boolean;
}

interface QuickAdminActionsCardProps {
  actions: AdminAction[];
}

export default function QuickAdminActionsCard({
  actions,
}: QuickAdminActionsCardProps) {
  return (
    <section className="rounded-xl border bg-white">
      <div className="px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">
          Quick admin actions
        </h2>

        <div className="mt-3 space-y-2">
          {actions.map((action) => (
            <button
              key={action.id}
              onClick={action.onClick}
              className={`w-full rounded-md px-3 py-2 text-sm font-medium ${
                action.primary
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'border text-gray-700 hover:bg-gray-50'
              }`}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
