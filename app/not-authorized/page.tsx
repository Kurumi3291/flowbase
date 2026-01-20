export default function NotAuthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md rounded-xl bg-white p-8 text-center shadow-sm border border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">
          Access denied
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          You don’t have permission to access this page.
        </p>
      </div>
    </div>
  );
}
