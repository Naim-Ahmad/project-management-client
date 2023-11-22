import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import DashboardNav from "./dashboardNav/DashboardNav";
import { useSelector } from "react-redux";

const DashbordLayout = () => {
  const { showNav } = useSelector((state) => state.dashboard);
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <div>Auth checking...</div>;
  return (
    <section className="flex h-screen">
      {showNav && (
        <div className="max-w-xs  absolute left-0 top-16 z-50 transition-all duration-300 lg:static">
          <Sidebar />
        </div>
      )}

      <div className="bg-[#EEF1F3] flex-grow transition h-screen w-full">
        <DashboardNav />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashbordLayout;
