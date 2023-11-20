import { Badge } from "@material-tailwind/react";
import {
  IoIosMenu,
  IoMdNotificationsOutline,
  IoMdSearch,
} from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useDispatch } from "react-redux";
import { setShowNav } from "../../redux/features/dashboard/dashboardSlice";

const DashboardNav = () => {
  const dispatch = useDispatch();
  const handelNavbar = () => {
    dispatch(setShowNav());
  };
  return (
    <nav className="border-b border-[#E3EBF6] shadow text-blue-300">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-10">
          <IoIosMenu
            size={25}
            className="cursor-pointer"
            onClick={handelNavbar}
          />
          <div className="flex items-center space-x-2 bg-blue-100 px-2 py-1 text-blue-700 text-xs rounded cursor-pointer">
            <GoPlus className="font-semibold text-lg" />
            <span>New Task</span>
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
