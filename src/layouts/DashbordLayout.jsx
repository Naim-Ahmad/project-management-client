import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import DashboardNav from "./dashboardNav/DashboardNav";
import { useSelector } from "react-redux";

const DashbordLayout = () => {
  const { showNav } = useSelector((state) => state.dashboard);
  return (
    <section className="flex">
      {showNav && (
        <div className="max-w-xs  absolute left-0 top-16 z-50 transition-all duration-300 lg:static">
          <Sidebar />
        </div>
      )}

      <div className="bg-[#EEF1F3] flex-grow transition h-screen">
        <DashboardNav />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashbordLayout;
