import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex bg-[#020617] min-h-screen">

      <Sidebar />

      <div className="flex-1 overflow-hidden">

        {children}

      </div>

    </div>
  );
}