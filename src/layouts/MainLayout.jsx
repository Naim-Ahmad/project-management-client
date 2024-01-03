import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

export default function MainLayout() {
  const { loading } = useSelector((state) => state.auth);
  if (loading) return <div>Auth checking...</div>;
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
}
