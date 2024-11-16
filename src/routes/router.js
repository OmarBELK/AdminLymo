import AllAssets from "../pages/AllAssets/AllAssets";
import Dashboard from "../pages/Dashboard/Dashboard";
import NewClient from "../pages/NewClient/NewClient";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Layout from "../layouts/Layout";
import Login from "../pages/Login/Login";
import AllLeads from "../pages/AllLead/AllLead";
import AllClients from "../pages/AllClients/AllClients";
import NewLead from "../pages/NewLead/NewLead";
import BigCalendar from "../pages/BigCalender/BigCalender";
import Performance from "./../pages/Performance/Performance";
import Projects from "../pages/Projects/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/new-client",
        element: <NewClient />,
      },
      {
        path: "/new-lead",
        element: <NewLead />,
      },
      {
        path: "/all-assets",
        element: <AllAssets />,
      },
      {
        path: "/all-leads",
        element: <AllLeads />,
      },
      {
        path: "/all-clients",
        element: <AllClients />,
      },
      {
        path: "/calender",
        element: <BigCalendar />,
      },
      {
        path: "/performance",
        element: <Performance />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
