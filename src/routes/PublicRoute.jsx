import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <div>loading...</div>;
  return user ? <Navigate to={"/"} /> : children;
};

export default PublicRoute;
