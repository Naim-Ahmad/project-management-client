import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar/Sidebar";
import DashboardNav from "./dashboardNav/DashboardNav";

const DashbordLayout = () => {
  return (
    <section className="flex">
      <div className="max-w-xs">
        <Sidebar />
      </div>
      <div className="bg-[#EEF1F3] flex-grow">
        <DashboardNav />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashbordLayout;
