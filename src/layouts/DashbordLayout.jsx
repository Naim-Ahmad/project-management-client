import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ProjectModal from "../components/ProjectModal/ProjectModal";
import { setShowNav } from "../redux/features/dashboard/dashboardSlice";
import DashboardNav from "./dashboardNav/DashboardNav";
import { Sidebar } from "./sidebar/Sidebar";

const DashboardLayout = () => {
  const { showNav } = useSelector((state) => state.dashboard);
  const { loading } = useSelector((state) => state.auth);
  const { modalOpen } = useSelector((state) => state.project);

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = window.onresize = () => {
      if (window.innerWidth > 1024) {
        dispatch(setShowNav(true))
      } else {
        dispatch(setShowNav(false))
      }
    }
    // console.log(unsubscribe)
    return () => unsubscribe()
  }, [])

  if (loading) return <div>Auth checking...</div>;
  return (
    <section className=" flex ">
      {showNav && (
        <div className="absolute z-10 lg:sticky top-0 lg:left-0 h-[100svh] transition-all duration-300">
          <Sidebar />
        </div>
      )}

      <div className="bg-[#EEF1F3] flex-grow transition w-full">
        <DashboardNav />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      {/* modal for create project */}
      {modalOpen && <ProjectModal />}
    </section>
  );
};

export default DashboardLayout;
