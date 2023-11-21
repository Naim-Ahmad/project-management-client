import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import { useSelector } from "react-redux";

export default function MainLayout() {
  const { user } = useSelector((state) => state.auth);
  if (!user) return <div>Auth checking...</div>;
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
