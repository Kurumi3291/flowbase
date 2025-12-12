type KpiCardProps = {
  title: string;
  value: string;
  description?: string;
};

export default function KpiCard({
  title,
  value,
  description,
}: KpiCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-gray-900">
        {value}
      </div>
      {description && (
        <div className="mt-1 text-xs text-gray-500">
          {description}
        </div>
      )}
    </div>
  );
}
