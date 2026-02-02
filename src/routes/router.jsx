import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlankLayout from "../layouts/BlankLayout";
import Home from "../pages/Home";
import FiltersPage from "../pages/FiltersPage";
import WatchMovie from "../pages/WatchMovie";
import AnimeDetailsPage from "../pages/AnimeDetails";
import RequestPage from "../pages/RequestPage";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminPanel from "../pages/AdminPanel";
import AdminLayout from "../layouts/AdminLayout";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/filter",
        element: <FiltersPage />,
      },
      {
        path: "/watch/:slug",
        element: <WatchMovie />,
      },
      {
        path: "/details/:slug",
        element: <AnimeDetailsPage />,
      },
    ],
  },
  {
    path: "/",
    element: <BlankLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/request",
        element: <RequestPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminPanel />,
      },
    ],
  },
]);
export default router;
