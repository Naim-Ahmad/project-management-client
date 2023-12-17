import { createBrowserRouter } from "react-router-dom";
import DashbordLayout from "../layouts/DashbordLayout";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/dashbord/Dashboard";
import Projects from "../pages/dashbord/workSpace/Projects";
import Home from "../pages/home/Home";
import ManagerRoute from "./ManagerRoute";
import PublicRoute from "./PublicRoute";

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
      {
        path: "projects",
        element: (
          <ManagerRoute>
            <Projects />
          </ManagerRoute>
        ),
      },
    ],
  },
]);

export default router;
