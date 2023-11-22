import { PencilIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";

const EditOption = ({ user }) => {
  const { _id, role, isVarified } = user;
  return (
    <Menu placement="right-end">
      <Tooltip content="Edit User">
        <MenuHandler>
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </MenuHandler>
      </Tooltip>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EditOption;
