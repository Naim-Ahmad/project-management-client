import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/home/Home";
import DashbordLayout from "../layouts/DashbordLayout";
import Dashboard from "../pages/dashbord/Dashboard";
import PublicRoute from "./PublicRoute";
import ManagerRoute from "./ManagerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashbordLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ManagerRoute>
            <Dashboard />
          </ManagerRoute>
        ),
      },
    ],
  },
]);

export default router;
