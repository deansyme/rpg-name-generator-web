import { RequireAuth } from "@/components/auth/RequireAuth";
import { Sidebar } from "@/components/ui/Sidebar";

export default function ProjectsPage() {
  return (
    <RequireAuth>
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-6">
          <Sidebar />
          <main className="panel rounded-2xl p-4">
            <div className="text-sm text-white/60">Projects</div>
            <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
            <div className="mt-2 text-sm text-white/55">
              Placeholder page. (Tasks opens in Notion.)
            </div>
          </main>
        </div>
      </div>
    </RequireAuth>
  );
}
