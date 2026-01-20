// components/dashboard/cards/HelpResourcesCard.tsx

interface HelpResource {
  id: string;
  label: string;
  href: string;
}

interface HelpResourcesCardProps {
  resources: HelpResource[];
}

export default function HelpResourcesCard({
  resources,
}: HelpResourcesCardProps) {
  return (
    <div className="col-span-full rounded-xl border bg-white px-6 py-3">
      <h2 className="mb-2 text-sm font-semibold text-gray-900">
        Help & resources
      </h2>

      <ul className="space-y-0.5">
        {resources.map((resource) => (
          <li key={resource.id}>
            <a
              href={resource.href}
              className="block rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              {resource.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
