import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DashboardNav from "./dashboardNav/DashboardNav";
import { Sidebar } from "./sidebar/Sidebar";

const DashbordLayout = () => {
  const { showNav } = useSelector((state) => state.dashboard);
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <div>Auth checking...</div>;
  return (
    <section className=" flex ">
      {showNav && (
        <div className="absolute lg:sticky top-0 h-[90vh] transition-all duration-300">
          <Sidebar />
        </div>
      )}

      <div className="bg-[#EEF1F3] flex-grow transition w-full">
        <DashboardNav />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default DashbordLayout;
