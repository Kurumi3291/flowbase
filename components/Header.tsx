'use client';

import { useSessionStore } from '@/stores/sessionStore';

export default function Header() {
  const selectedOrg = useSessionStore((s) => s.selectedOrg);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Left */}
        <div className="flex items-center gap-2">
          {/* Mobile hamburger */}
          <button
            className="rounded-md p-2 hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span>Flowbase</span>

            {selectedOrg && (
              <>
                <span className="text-gray-300">/</span>
                <span className="font-normal text-gray-600">
                  {selectedOrg.name}
                </span>
              </>
            )}
          </div>
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
