import { PencilIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import { useUpdateEmployeeMutation } from "../../../redux/features/dashboard/dashboardApi";

const EditOption = ({ user }) => {
  const { _id, role, isVarified } = user;
  const [updateEmployee] = useUpdateEmployeeMutation();

  const handelVarified = () => {
    const updatedData = {
      isVarified: true,
    };
    updateEmployee({ _id, updatedData });
  };

  return (
    <Menu placement="right-end" className="capitalize">
      <Tooltip content="Edit User">
        <MenuHandler>
          <IconButton variant="text">
            <PencilIcon className="h-4 w-4" />
          </IconButton>
        </MenuHandler>
      </Tooltip>
      <MenuList className="capitalize">
        {!isVarified && (
          <MenuItem onClick={handelVarified}> Make as varified</MenuItem>
        )}

        {isVarified && (
          <MenuItem>
            {role == "employee" ? "Promot to manager" : "Demote to employee"}
          </MenuItem>
        )}

        <MenuItem className="text-red-500">Delete</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EditOption;
