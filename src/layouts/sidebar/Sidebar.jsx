import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  PresentationChartBarIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import classNames from "classnames";
import { FaTasks } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { useLogoutMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";

export function Sidebar() {
  const { pathname } = useLocation();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const sidebarLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
    },
    {
      label: "Projects",
      href: "/dashboard/projects",
      icon: <FaTasks className="h-3 w-3" />,
    },
    {
      label: "Inbox",
      href: "/dashboard/inbox",
      icon: <InboxIcon className="h-5 w-5" />,
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: <UserCircleIcon className="h-5 w-5" />,
    },
    {
      label: "Settings",
      href: "/dashboard/settings",
      icon: <Cog6ToothIcon className="h-5 w-5" />,
    },
  ];

  const handelLogout = () => {
    logout();
    dispatch(setUser(null));
  };

  return (
    <Card className=" sticky w-full max-w-xs p-4 rounded-none  bg-white shadow text-color-gray">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          MERN
        </Typography>
      </div>
      <List className="text-color-gray dashbordside">
        {sidebarLinks.map((item) => (
          <NavLink key={item.label} to={item.href}> 
          <ListItem
            
            className={classNames({
              "text-color-gray": true,
              "hover:bg-cyan-800 hover:text-white": true,
              "bg-cyan-800 text-white": pathname == item.href,
            })}
          >
            <ListItemPrefix>{item.icon}</ListItemPrefix>
            {item.label}
          </ListItem>
          </NavLink>
        ))}

        <ListItem
          className="hover:bg-cyan-800 hover:text-white"
          onClick={handelLogout}
        >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
