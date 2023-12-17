import { PencilIcon } from "@heroicons/react/24/outline";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";
import {
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} from "../../../redux/features/dashboard/dashboardApi";
import Swal from "sweetalert2";
import { useEffect } from "react";

const EditOption = ({ user }) => {
  const { _id, role, isVerified } = user;
  const [updateEmployee] = useUpdateEmployeeMutation();
  const [deleteEmployee, { data }] = useDeleteEmployeeMutation();

  useEffect(() => {
    if (data?.deletedCount == 1) {
      Swal.fire({
        title: "Deleted!",
        text: "User has been deleted.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [data]);

  // this will make user verified
  const handelVerified = () => {
    const updatedData = {
      isVerified: true,
    };
    updateEmployee({ _id, updatedData });
  };
  // make employee to manager
  const handelRole = (role) => {
    const updatedData = {
      role: role == "manager" ? "employee" : "manager",
    };
    updateEmployee({ _id, updatedData });
  };

  const handelDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Delete This User?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(_id);
      }
    });
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
        {!isVerified && (
          <MenuItem onClick={handelVerified}> Make as verified</MenuItem>
        )}

        {isVerified && (
          <MenuItem onClick={() => handelRole(role)}>
            {role == "employee" ? "Promote to manager" : "Demote to employee"}
          </MenuItem>
        )}

        <MenuItem className="text-red-500" onClick={handelDelete}>
          Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default EditOption;
