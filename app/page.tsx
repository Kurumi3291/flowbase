import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import KpiCard from "@/components/KpiCard";
import RequestsTable from "@/components/RequestsTable";
import SecondaryCard from "@/components/SecondaryCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 sm:p-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Admin Overview
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Overview of your application status and recent activity.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <KpiCard title="Total Users" value="1,248" description="+4% this month" />
            <KpiCard title="Active Users" value="982" description="+2% this week" />
            <KpiCard title="Monthly Revenue" value="$12,430" description="+6% this month" />
            <KpiCard title="Pending Requests" value="17" description="Requires attention" />
          </div>

          <RequestsTable />

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <SecondaryCard title="System Status">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                All systems operational
              </div>
            </SecondaryCard>

            <SecondaryCard title="Upcoming Billing">
              <div>Plan: Pro</div>
              <div className="mt-1 text-gray-500">
                Next invoice: Jun 1, 2024 — $99
              </div>
            </SecondaryCard>
          </div>
        </main>
      </div>
    </div>
  );
}
