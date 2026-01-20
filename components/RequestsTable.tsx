import StatusBadge from "@/ui/StatusBadge";

const requests = [
  {
    id: 1,
    request: "Account access",
    user: "Alice Johnson",
    status: "Pending",
    date: "2024-05-12",
  },
  {
    id: 2,
    request: "Billing update",
    user: "Michael Smith",
    status: "Approved",
    date: "2024-05-10",
  },
  {
    id: 3,
    request: "Password reset",
    user: "Emma Wilson",
    status: "Rejected",
    date: "2024-05-08",
  },
];

export default function RequestsTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
        Recent Requests
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Request</th>
              <th className="px-6 py-3 text-left font-medium">User</th>
              <th className="px-6 py-3 text-left font-medium">Status</th>
              <th className="px-6 py-3 text-left font-medium">Date</th>
              <th className="px-6 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {requests.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100/50">
                <td className="px-6 py-4 text-gray-700">
                  {item.request}
                </td>
                <td className="px-6 py-4 text-gray-700">
                  {item.user}
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={item.status as any} />
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {item.date}
                </td>
                <td className="px-6 py-4">
                  <button className="text-sm font-medium text-indigo-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
