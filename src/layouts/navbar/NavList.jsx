import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const navList = (
  <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <NavLink to="/page" className="flex items-center">
        Pages
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <NavLink to="/accounts" className="flex items-center">
        Account
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <NavLink to="/blocks" className="flex items-center">
        Blocks
      </NavLink>
    </Typography>
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-normal"
    >
      <NavLink to="/docs" className="flex items-center">
        Docs
      </NavLink>
    </Typography>
  </ul>
);

export default navList;
