import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  if (loading) return <div>loading...</div>;
  if (!user?.isVarified) return <Navigate to={"/"} />;
  return user ? (
    children
  ) : (
    <Navigate state={{ from: pathname }} to={"/login"} />
  );
};

export default PrivateRoute;
