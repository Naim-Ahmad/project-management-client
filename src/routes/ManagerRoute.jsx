import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ManagerRoute = ({ children }) => {
  const { loading, user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  if (loading) return <div>loading...</div>;
  if (!user) return <Navigate to={"/login"} state={{ from: pathname }} />;
  if (!user?.role == "manager") return <Navigate to={"/"} />;
  return user?.role == "manager" ? children : <Navigate to={"/"} />;
};

export default ManagerRoute;
