type Status = "Pending" | "Approved" | "Rejected";

export default function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Approved: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
