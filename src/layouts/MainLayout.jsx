import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";

export default function MainLayout() {
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <div>Auth checking...</div>;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
