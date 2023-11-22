import { useGetEmployeesQuery } from "../../redux/features/dashboard/dashboardApi";
import EmployeeTable from "./userTable/UserTable";

const Dashboard = () => {
  const { data: users } = useGetEmployeesQuery();

  return (
    <div className="h-screen">
      <EmployeeTable users={users} />
    </div>
  );
};

export default Dashboard;
