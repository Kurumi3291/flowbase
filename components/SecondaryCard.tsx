type SecondaryCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function SecondaryCard({
  title,
  children,
}: SecondaryCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-2 text-sm font-medium text-gray-700">
        {title}
      </div>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}
