import { Badge } from "@material-tailwind/react";
import { GoPlus } from "react-icons/go";
import { IoMdNotificationsOutline, IoMdSearch } from "react-icons/io";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setShowNav } from "../../redux/features/dashboard/dashboardSlice";
import { setModalOpen } from "../../redux/features/project/projectSlice";

const DashboardNav = () => {
  const { showNav } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handelModalOpen = () => {
    dispatch(setModalOpen(true));
  };
  
  return (
    <nav className="border-b border-[#E3EBF6] shadow text-blue-300 sticky top-0 z-40 bg-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-10">
          {showNav ? (
            <LuPanelLeftClose
              size={25}
              className="cursor-pointer"
              onClick={()=> dispatch(setShowNav(false))}
            />
          ) : (
            <LuPanelRightClose
              size={25}
              className="cursor-pointer"
              onClick={()=> dispatch(setShowNav(true))}
            />
          )}
          <div
            onClick={handelModalOpen}
            className="flex items-center space-x-2 bg-blue-100 px-2 py-1 text-blue-700 text-xs rounded cursor-pointer"
          >
            <GoPlus className="font-semibold text-lg" />
            <span>New Project</span>
          </div>
        </div>
        <div>
          <ul className="flex items-center space-x-4">
            <li>
              <IoMdSearch size={25} className="cursor-pointer" />
            </li>
            <li>
              <Badge content="4" className="bg-teal-700" withBorder>
                <IoMdNotificationsOutline
                  size={25}
                  className="cursor-pointer"
                />
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
