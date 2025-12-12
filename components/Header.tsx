export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Left */}
        <div className="text-sm font-semibold text-gray-900">
          Flowbase
        </div>

        {/* Center */}
        <div className="hidden max-w-sm flex-1 px-6 md:block">
          <input
            type="text"
            placeholder="Search…"
            className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm text-gray-700 placeholder-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>
      </div>
    </header>
  );
}
