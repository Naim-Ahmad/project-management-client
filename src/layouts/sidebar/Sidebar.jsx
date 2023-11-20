import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

export function Sidebar() {
  const { pathname } = useLocation();
  const sidebarLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <PresentationChartBarIcon className="h-5 w-5" />,
    },
    {
      label: "E-Commerce",
      href: "/dashboard/ecommerce",
      icon: <ShoppingBagIcon className="h-5 w-5" />,
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
  return (
    <Card className="h-screen w-full max-w-xs p-4 rounded-none  bg-white shadow text-color-gray">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List className="text-color-gray dashbordside">
        {sidebarLinks.map((item) => (
          <ListItem
            key={item.label}
            className={classNames({
              "text-color-gray": true,
              "hover:bg-cyan-800 hover:text-white": true,
              "bg-cyan-800 text-white": pathname == item.href,
            })}
          >
            <ListItemPrefix>{item.icon}</ListItemPrefix>
            <NavLink to={item.href}> {item.label}</NavLink>
          </ListItem>
        ))}

        <ListItem className="hover:bg-cyan-800 hover:text-white">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
