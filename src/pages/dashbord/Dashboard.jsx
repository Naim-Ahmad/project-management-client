import { useEffect, useState } from "react";
import { useGetEmployeesQuery } from "../../redux/features/dashboard/dashboardApi";
import EmployeeTable from "./userTable/UserTable";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../../redux/features/dashboard/dashboardSlice";

const Dashboard = () => {
  const { query } = useSelector((state) => state.dashboard);
  const { data: results, isLoading } = useGetEmployeesQuery(query);
  const [varified, setvarified] = useState(true);
  const [role, setrole] = useState("employee");
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  // this hook only will fire when it dependency will update
  useEffect(() => {
    dispatch(
      setQuery(
        `?varified=${varified}&role=${role}&name=${name}&page=${currentPage}`
      )
    );
  }, [varified, role, dispatch, currentPage, name]);

  return (
    <div className="h-screen">
      {isLoading ? (
        <div>loading</div>
      ) : (
        <EmployeeTable
          results={results}
          setrole={setrole}
          setvarified={setvarified}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setName={setName}
        />
      )}
    </div>
  );
};

export default Dashboard;
