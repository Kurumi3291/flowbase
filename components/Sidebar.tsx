const navItems = [
  { label: "Overview", active: true },
  { label: "Users", active: false },
  { label: "Analytics", active: false },
  { label: "Billing", active: false },
  { label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white md:block">
      <nav className="p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                  item.active
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
