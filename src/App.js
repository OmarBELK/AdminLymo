import Layout from "./layouts/Layout";
import AllAssets from "./pages/AllAssets/AllAssets";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { router } from "./routes/router";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

export default function App() {
  return (
    // <Layout>
    //   <Dashboard />
    // </Layout>
    // // <Login />
    <RouterProvider router={router} />
  );
}
